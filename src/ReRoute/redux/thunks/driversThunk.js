import {setDriversSlice, addDriverSlice } from '../slices/driversSlice'
import {postDriverService,getDriversService } from '../../services/driver.service'
import { setDriverAuthSlice } from '../slices/authSlice'

// get
export const getDriversThunk = () => {
    return async (dispatch) => {
        const Drivers =await getDriversService()
        dispatch(setDriversSlice(Drivers))// מבצע את הפעולה שברדוסר
    }
}
//post
export const postDriverThunk = (driver) => {
    return async (dispatch) => {
       const Driver = await postDriverService(driver)
       dispatch(addDriverSlice(Driver))// מוסיף לרשימה של כל הנהגים
       dispatch(setDriverAuthSlice(Driver))//עורך את הנהג הנוכחי
       return Driver;
    }
}