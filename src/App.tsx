import React from 'react'
import { Provider } from 'react-redux'
import FlashMessage from 'react-native-flash-message'
import { PersistGate } from 'redux-persist/integration/react'

// navigators
import AppNavigator from './navigators/appNavigator'

// redux
import { persistor, store } from './store'

// redux

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <AppNavigator />
          <FlashMessage position={'top'} />
        </>
      </PersistGate>
    </Provider>
  )
}

export default App
