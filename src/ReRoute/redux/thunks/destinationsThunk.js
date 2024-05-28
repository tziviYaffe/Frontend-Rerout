import axios from '../../services/destination.service'

import {getDestinationsService,postDestinationService  ,deleteDestinationService} from '../../services/destination.service'
import { setDriverAuthSlice } from '../slices/authSlice'
import {addDestinationSlice} from '../slices/destinationsSlice'

// get
export const getDestinationThunk = () => {
    return async (dispatch) => {
        const destinations =await getDestinationsService()
        dispatch(setDriverAuthSlice(destinations));//set to auth
    }
}
//post
//post
// export const postDriverThunk = (driver) => {
//     return async (dispatch) => {
//        const Driver = await postDriverService(driver)
//        dispatch(addDriverSlice(Driver))// מוסיף לרשימה של כל הנהגים
//        dispatch(setDriverAuthSlice(Driver))//עורך את הנהג הנוכחי
//        return Driver;
//     }
// }

export const postDestinationThunk = (destination) => {
    return async (dispatch) => {
       const Destination = await postDestinationService(destination)
       dispatch(addDestinationSlice(Destination))// מוסיף לרשימה של כל הנהגים
       return Destination;
    }
}


//delete
