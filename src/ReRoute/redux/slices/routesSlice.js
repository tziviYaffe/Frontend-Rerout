import { createSlice } from '@reduxjs/toolkit'

export const routesSlice = createSlice({
    name: 'routes',
    initialState: {
        routes: undefined
    },
    reducers: {
         addRoutesSlice: (state, action)=>{
          state.routes.push(action.payload)
         },
        setRoutesSlice: (state, action) => {
            state.routes = action.payload
        },
        deleteRoutesSlice: (state, action) => {
            state.routes.remove(action.payload)
        }
    }
})

export const {  setRoutesSlice,  addRoutesSlice} = routesSlice.actions