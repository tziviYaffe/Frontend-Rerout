
import { useNavigate, Link } from 'react-router-dom';
import { getDriversThunk } from '../redux/thunks/driversThunk'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import './home.css';
import { setDriverAuthSlice } from '../redux/slices/authSlice';

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // יבוא של הנתונים ששמורים בסליס
  const drivers = useSelector(state => state.drivers.drivers);

  useEffect(() => {
    if (!drivers) {
      dispatch(getDriversThunk())
    }
  }, [])

  const [form, setForm] = React.useState({ firstname: '', password: '' })

  function handelClick(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }
  function handelSubmit(event) {
    event.preventDefault()
    checkPsw()
  }

  function checkPsw() {
    const driver = drivers.find(c => c.firstname === form.firstname && c.password === form.password)
    console.log(drivers);
    //אם הנהג לא קיים
    if(driver===undefined)
      navigate('/auth/signUp')
    //אם הנהג קיים
    else {
      dispatch(setDriverAuthSlice(driver))
      navigate('/home/reRouteSignIn')    
    }

  }

  return <>
    <div className="response-window">
      <div className="login-container">
        <div className="login-form">
          <div className="login-image">
            <img src={require('./g.jpg')} alt="Login" />
          </div>
          <h1>Login</h1>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="firstname" value={form.firstname} onChange={handelClick} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" value={form.password} onChange={handelClick} />
            </div>
            <button type="submit">כניסה למערכת</button>
          </form>
          <Link to="/auth/signUp" className="left-link">אינך רשום עדין? להרשמה</Link>
          <br></br>
          <Link to="/reRouteSignUp" className="left-link">לכניסה חד פעמית ללא הרשמה</Link>
        </div>
     
      </div>
    </div>
    
  </>
}