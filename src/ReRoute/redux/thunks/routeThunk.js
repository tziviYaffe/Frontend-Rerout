import axios from '../../services/route.service'
import {addRoutesSlice,setRoutesSlice} from '../slices/routesSlice'
import {getRouteService ,deleteRouteService,updateRouteService,postRouteService} from '../../services/route.service'
import { addRouteAuthSlice } from '../slices/authSlice'

// get
export const getRouteThunk = () => {
    return async (dispatch) => {
        const Routes =await getRouteService()
        dispatch(setRoutesSlice(Routes))// מבצע את הפעולה שברדוסר
    }
}
//post
export const postRouteThunk = (newRoute) => {
    return async (dispatch) => {
       const route = await postRouteService(newRoute)
       dispatch(addRouteAuthSlice(route))//הוספת מסלול לנהג הנוכחי
       return route;
    }
}