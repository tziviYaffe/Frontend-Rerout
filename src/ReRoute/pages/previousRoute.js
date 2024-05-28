import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import MenueBar from '../components/menu-bar'
import { useSelector, useDispatch } from 'react-redux'
import { getRouteThunk } from '../redux/thunks/routeThunk'
export default function PreviousRoute(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //יבוא של אי די נוכחי
    const authId=useSelector(state => state.auth.id);
    // יבוא של המסולים ששמורים בסלייס
    const routes = useSelector(state => state.routes.routes)
    //ייבוא  של המסלולים ששמורים למשתמש הנוכחי
    const routesId=routes.find(route=>route.id===authId);

    useEffect(() => {
      if (!routes) {
        dispatch(getRouteThunk())
      }
    }, [])



    return <>
    PreviousRoute:
    {/* {arrDest.map((route, index) => (
    <div key={index}>
    
      <button className="button" >{route.n}</button>
       </div>
      ))} */}

     </>

}