import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'

// utils
import baseService from '../baseService'

const initialState: {
  drivers: IDriver[]
  isLoading: boolean
} = {
  drivers: [],
  isLoading: false,
}

export const getDrivers = createAsyncThunk<IDriver[], number>(
  'driverSlice/getDrivers',
  async (offset, { rejectWithValue }) => {
    try {
      const res = await baseService.get(
        `/f1/drivers.json?limit=10&offset=${offset}`,
      )
      return res.data.MRData.DriverTable.Drivers
    } catch (e: any) {
      return rejectWithValue(e.response?.data.alert || 'Something went wrong')
    }
  },
)

const driverSlice = createSlice({
  name: 'driverSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDrivers.fulfilled, (state, { payload }) => {
      state.drivers = [...state.drivers, ...payload]
    })
    builder.addCase(getDrivers.pending, (state) => {
      state.isLoading = true
    })
    builder.addMatcher(
      isAnyOf(getDrivers.fulfilled, getDrivers.rejected),
      (state) => {
        state.isLoading = false
      },
    )
  },
})

export const selectDrivers = (state: AppState) => state.driverSlice.drivers
export const selectIsLoading = (state: AppState) => state.driverSlice.isLoading

export default driverSlice.reducer
