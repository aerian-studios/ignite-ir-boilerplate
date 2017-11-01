// @flow
import { put, select } from 'redux-saga/effects'
import { GithubActions } from '../Redux/GithubRedux'
import type { ImmutableGithubState, GithubAction } from '../Redux/GithubRedux'
import { is } from 'ramda'
import Reactotron from 'reactotron-react-native'

export type State = {
  github: ImmutableGithubState
}

export type Action = GithubAction

// exported to make available for tests
export const selectAvatar = (state:State) => state.github.avatar

// process STARTUP actions
export function * startup (action:Action):Iterable<any> {
  if (__DEV__) {
    // straight-up string logging
    Reactotron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    Reactotron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectAvatar
    })

    // fully customized!
    let subObject = { a: 1, b: [1, 2, 3], c: true, circularDependency: (undefined:any) }
    subObject.circularDependency = subObject // osnap!
    Reactotron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar
      }
    })
  }
  const avatar = yield select(selectAvatar)
  // only get if we don't have it yet
  if (!is(String, avatar)) {
    yield put(GithubActions.userRequest('GantMan'))
  }
}
