import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'

// utils
import { MainStackParamsList } from '../../../navigators/appNavigator'

// styles
import styles from './styles'

type DriverProps = {
  driver: IDriver
}

type navigationProps = NativeStackNavigationProp<MainStackParamsList, 'Driver'>

const DriverItem: FC<DriverProps> = ({ driver }) => {
  const navigation = useNavigation<navigationProps>()

  const onDriverPress = () => {
    navigation.navigate('Driver', { driver })
  }

  return (
    <Pressable style={styles.container} onPress={onDriverPress}>
      <Text>{`${driver.givenName} ${driver.familyName}`}</Text>
      <Text>{driver.nationality}</Text>
    </Pressable>
  )
}

export default DriverItem
