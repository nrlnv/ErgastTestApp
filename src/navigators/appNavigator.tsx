import React, { useRef } from 'react'
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screems
import Home from '../screens/Home/Home'
import Driver from '../screens/Driver/Driver'

// types
export type MainStackParamsList = {
  Home: undefined
  Driver: { driver: IDriver }
}

const MainStack = createNativeStackNavigator<MainStackParamsList>()

const AppNavigator = () => {
  const navigationRef =
    useRef<NavigationContainerRef<MainStackParamsList>>(null)

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Driver"
          component={Driver}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
