// @flow
import * as React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/AlertMessageStyles'

type Props = {
  icon?: string;
  show?: boolean;
  style?: any;
  title?: string;
}

const AlertMessage: React.StatelessFunctionalComponent<Props> = ({ icon, show = true, style, title }: Props) => show ? (
  <View style={[styles.container, style]}>
    <View style={styles.contentContainer}>
      <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
    </View>
  </View>
) : null

export default AlertMessage
