import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import MapContainer from '../components/mapContainer'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
import Box from '@mui/material/Box';
// import { green } from '@mui/material/colors';
// import Icon from '@mui/material/Icon';
// import { Button } from '@mui/base';
import { getDestinationThunk } from '../redux/thunks/destinationsThunk'
import { useSelector, useDispatch } from 'react-redux'
import { Margin } from '@mui/icons-material';
//import { Margin } from '@mui/icons-material';


export default function ReRouteSignIn(){

    return<>
    <h1>cccc</h1>
    </>
    // const dispatch = useDispatch();
    // // יבוא של הנתונים ששמורים בסליס
    // const destinations = useSelector(state => state.destinations.destinations)
    // const auth=useSelector(state=>state.auth)
    // useEffect(() => {
    //     if (!destinations) {
    //         dispatch(getDestinationThunk())
    //     }
    // }, [])

    // const [form,setForm] = React.useState({firstname:'', destination:''})

    // function handelClick(event){
    //     setForm({...form,[event.target.name]:event.target.value})
    // }

    // const navigate = useNavigate();
    // function setAsRoute(){
    //     navigate('/home')
    // }

    // function putDestination(){
    //     navigate('/reRouteSignIn')
    // }
    // function checkSortRoute(){
    // }
 

   
    // console.log(destinations)
    // return<>
    // <h1>{auth.user.firstname}</h1>
    // <MapContainer/>

    // <form style={{ marginLeft: "80%", marginRight:0}}>
    // <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 230 }}  >
    //   <IconButton sx={{ p: '10px' }} aria-label="menu" > </IconButton>
    //   <InputBase sx={{ ml: 1, flex: 1 }} placeholder="מקור" inputProps={{ 'aria-label': 'search google maps' }} />
    //   <Box  sx={{'& > :not(style)': {  m: 2, }, }} > </Box>
    // </Paper>
    // <br></br>
    // <br></br>
    // <Paper component="form"  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 230 }} >
    //   <InputBase sx={{ ml: 1, flex: 1 }} placeholder="יעד"  inputProps={{ 'aria-label': 'search google maps' }} />
    //   <Divider sx={{ height: 20, m: 0.5 }} orientation="vertical" />
    //   <Box sx={{  '& > :not(style)': {  m: 2,  }, }} > </Box>
    // </Paper>
    // <br></br>
    // <button onClick={setAsRoute}>הגדר כמסלול</button>
    // <br></br>
    // <br></br>
    // <button onClick={checkSortRoute}>בדיקת המסלול הקצר</button>
    // </form>
    // </>
}