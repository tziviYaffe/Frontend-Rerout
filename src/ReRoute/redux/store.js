import { configureStore } from '@reduxjs/toolkit'

import {driversSlice} from './slices/driversSlice'
import { authSlice } from './slices/authSlice'

const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        drivers:driversSlice.reducer,

    }
})
export default store;
