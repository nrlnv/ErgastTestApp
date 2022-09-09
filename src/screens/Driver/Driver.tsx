import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { Linking, SafeAreaView, Text, TouchableOpacity } from 'react-native'

// utils
import { MainStackParamsList } from '../../navigators/appNavigator'
import styles from './styles'

const Driver: FC<NativeStackScreenProps<MainStackParamsList, 'Driver'>> = ({
  route,
}) => {
  const { driver } = route?.params

  const { driverId, givenName, familyName, nationality, dateOfBirth, url } =
    driver

  const onLinkPress = async () => {
    await Linking.openURL(url)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Driver id: {driverId}</Text>
      <Text>Driver name: {givenName}</Text>
      <Text>Driver family name: {familyName}</Text>
      <Text>Driver nationality: {nationality}</Text>
      <Text>Driver birthday: {dateOfBirth}</Text>
      <TouchableOpacity onPress={onLinkPress}>
        <Text>click here to see driver's wikipedia</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Driver
