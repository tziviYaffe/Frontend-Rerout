
import GoogleMaps from '../components/trailAoutoComplete'
import {NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getDriversThunk, postDriverThunk } from '../redux/thunks/driversThunk'
import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//
  








export default function SignUp(){

  
  // const [source, setSource] = useState('');
  const [errorfiratname, setErrorfiratname] = useState(false);
  const [errorlastname, setErrorlastname] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const navigate = useNavigate();
    const dispatch = useDispatch();

      // יבוא של הנתונים ששמורים בסליס
      const drivers= useSelector(state => state.drivers.drivers);

      useEffect(() => {
         if (!drivers) {  
             dispatch(getDriversThunk())
         }
     }, [])

    const [form, setForm] = React.useState({firstname:'', lastname:'',address:'',password:''})

    const handleInputNameChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
      // Regular expression to check if the value contains only letters
      const isLetterOnly = /^[a-zA-Z\s\u0590-\u05FF]+$/.test(value);
      // Regular expression to check if the value contains non-letter characters
      const hasNonLetterChars = /[^a-zA-Z\s\u0590-\u05FF]/.test(value);
      //setInputValue(value);
      setErrorfiratname(hasNonLetterChars || !isLetterOnly);
    };
    
    const handleInputfamilyChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
      // Regular expression to check if the value contains only letters
      const isLetterOnly = /^[a-zA-Z\s\u0590-\u05FF]+$/.test(value);
      // Regular expression to check if the value contains non-letter characters
      const hasNonLetterChars = /[^a-zA-Z\s\u0590-\u05FF]/.test(value);
      //setInputValue(value);
      setErrorlastname(hasNonLetterChars || !isLetterOnly);
    };



    const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    }



    const handleSubmit = (event) => {
    event.preventDefault();

    if(form.address==='' ||form.firstname===''||form.lastname===''||form.password==='')
    {
      alert("השדות אינם מלאים!")
    }
    
  else{
    const driver = drivers.find(c => c.firstname === form.firstname && c.password === form.password&&c.lastname===form.lastname&&c.address===form.address)
    //אם הנהג לא קיים
    if (driver === undefined)
   {
       dispatch(postDriverThunk(form))
       navigate('/home/reRouteSignIn', { state: { drivers: driver }})
   }
   //אם הנהג קיים
    else
   {
    alert("לקוח זה קיים במערכת")
   }
  }
   
  }



    return<>


    <form onSubmit={handleSubmit}>

    <Box component="form" sx={{  '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}noValidate autoComplete="off" >
      <div>
        <TextField
          error={errorfiratname}
          id="outlined-error-helper-text"
          name="firstname"
          label={errorfiratname ? 'Error' : 'Name'}
          defaultValue=""
          helperText={errorfiratname ? 'Enter only letters' : ''}
          value={form.firstname}
          type="text"
          onChange={handleInputNameChange}
        />
      </div>


      <div>
        <TextField
          error={errorlastname}
          id="outlined-error-helper-text"
          name="lastname"
          label={errorlastname ? 'Error' : 'Family'}
          defaultValue=""
          helperText={errorlastname ? 'Enter only letters' : ''}
          value={form.lastname}
          type="text"
          onChange={handleInputfamilyChange}
        />
      </div>

    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div> 
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
             value={form.password} 
             onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

      </div>
      <br></br>
      

    </Box>
    <GoogleMaps txt="כתובת" name="address" value={form.address}  onBlur={handleChange}/>
    <br></br>

    {/* <GoogleMaps  name="address"  txt="address" value={form.address}  onBlur={handleChange} /> */}

    




    <br></br>
    <nav>
        <NavLink to="/auth/login">יש לך חשבון? הכנס</NavLink>
    </nav>
   
    <button >הרשמה</button>
    </form> 
    </>
    
}