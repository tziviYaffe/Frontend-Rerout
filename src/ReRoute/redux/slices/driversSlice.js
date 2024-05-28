import { createSlice } from '@reduxjs/toolkit'

export const driversSlice = createSlice({
    name: 'drivers',
    initialState: {
        drivers: undefined
    },
    reducers: {
        addDriverSlice: (state, action)=>{
          state.drivers.push(action.payload)
         },
        setDriversSlice: (state, action) => {
            state.drivers = action.payload
        }
    }
})

export const { setDriversSlice, addDriverSlice } = driversSlice.actions