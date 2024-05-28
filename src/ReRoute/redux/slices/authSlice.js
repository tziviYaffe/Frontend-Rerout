import { createSlice } from '@reduxjs/toolkit'
//סלייס למשתמש הנוכחי
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id:0,
        driver:undefined
        // ,
        // routes:undefined

    },
    reducers: { 
        
        setDriverAuthSlice: (state, action) => {
            state.driver = action.payload
            state.id=action.payload.id
        }
        // ,
        // setRoutesAuthSlice: (state, action)=>{
        //  state.routes=action.payload
        // },
        // addRouteAuthSlice: (state, action)=>{
        //     if(!state.destinations)
        //     state.destinations=[]
        //   state.destinations.push(action.payload)
        // },

    }
})

export const {setDriverAuthSlice,setRoutesAuthSlice,addRouteAuthSlice} = authSlice.actions
