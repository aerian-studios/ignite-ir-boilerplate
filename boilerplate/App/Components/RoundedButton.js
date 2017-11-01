import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import styles from './Styles/RoundedButtonStyles'

// Note that this file (App/Components/RoundedButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Rounded Button', () =>
  (
    <RoundedButton
      text='real buttons have curves'
      onPress={() => window.alert('Rounded Button Pressed!')}
    />)
)

interface Props {
  onPress?: () => any;
  text?: string;
  children?: string;
}

const RoundedButton: React.StatelessFunctionalComponent<Props> = ({ text, children, onPress = () => { } }: Props) => {
  const buttonText = (text || children || '').toUpperCase()
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
