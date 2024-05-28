import { createSlice } from '@reduxjs/toolkit'

export const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: {
        destinations: undefined
    },
    reducers: {
         addDestinationSlice: (state, action)=>{
          state.destinations.push(action.payload)
         },
        setDestinationsSlice: (state, action) => {
            state.destinations = action.payload
        },
        deleteDestinationSlice: (state, action) => {
            state.destinations.remove(action.payload)
        }
        
    }
})

export const { setDestinationsSlice, addDestinationSlice,deleteDestinationSlice } = destinationsSlice.actions



