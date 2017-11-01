// @flow
import * as React from 'react'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'

interface Props {
  startup: () => void;
}

interface State {

}

export class RootContainer extends React.Component<Props, State> {
  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch: any): Props => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
