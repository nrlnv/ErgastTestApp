import { Dimensions } from 'react-native'

const baseSpace = 8
const bottomSpace = 43
const windowWidth = Dimensions.get('window').width

export const spaces = {
  windowWidth,
  baseSpace,
  bottomSpace,
  paddingHorizontal: baseSpace * 2,
  marginHorizontal: baseSpace * 2,
}
