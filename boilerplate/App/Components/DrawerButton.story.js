// @flow
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { View } from 'react-native'

import DrawerButton from './DrawerButton'

storiesOf('DrawerButton')
  .add('Default', () => (
    <View style={{ backgroundColor: 'black' }}>
      <DrawerButton
        text='Drawer Button'
        onPress={() => window.alert('Hi')}
      />
    </View>
  ))
