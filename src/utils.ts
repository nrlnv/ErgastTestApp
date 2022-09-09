import { showMessage } from 'react-native-flash-message'

// styles
import { palette } from './theme'

const showError = (message: string) => {
  showMessage({
    type: 'danger',
    autoHide: true,
    duration: 3000,
    message,
  })
}

const showSuccess = (message: string) => {
  showMessage({
    type: 'success',
    autoHide: true,
    duration: 3000,
    style: {
      backgroundColor: palette.lushJungle,
    },
    message,
  })
}

export { showError, showSuccess }
