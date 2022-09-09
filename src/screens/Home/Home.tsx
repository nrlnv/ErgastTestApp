import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from 'react-native'

// components
import DriverItem from '../../components/FlatListItems/DriverItem/DriverItem'

// redux
import { useAppDispatch, useAppSelector } from '../../store'
import {
  getDrivers,
  selectDrivers,
  selectIsLoading,
} from '../../store/driverSlice'

// utils
import { showError } from '../../utils'

// styles
import styles from './styles'

const Home: FC = () => {
  const dispatch = useAppDispatch()
  const drivers = useAppSelector(selectDrivers)
  const isLoading = useAppSelector(selectIsLoading)
  const [offset, setOffset] = useState<number>(0)

  const fetchDrivers = async () => {
    try {
      await dispatch(getDrivers(offset)).unwrap()
    } catch {
      showError('что то пошло не так')
    }
  }

  useEffect(() => {
    fetchDrivers()
  }, [])

  const renderItem: ListRenderItem<IDriver> = ({ item }) => {
    return <DriverItem driver={item} />
  }

  const ListFooterComponent = () => {
    return <ActivityIndicator animating={isLoading} size="large" />
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drivers}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlist}
        onEndReached={() => {
          setOffset((prevState) => prevState + 10)
          fetchDrivers()
        }}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  )
}

export default Home
