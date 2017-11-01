// @flow
import { createStore, applyMiddleware, compose, Reducer } from 'redux'
import Config from '../Config/DebugConfig'
import { SagaMonitor, default as createSagaMiddleware } from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'
import Reactotron from 'reactotron-react-native'

// creates the store
export default (rootReducer: Reducer<any, any>, rootSaga:Function) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  let opts = {}
  if (Config.useReactotron) {
    const sagaMonitor:SagaMonitor = Reactotron.createSagaMonitor()
    opts = { sagaMonitor }
  }
  const sagaMiddleware = createSagaMiddleware(opts)
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? Reactotron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
