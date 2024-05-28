import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function AddRoute(){

    const [form,setForm] = React.useState({name:'', destination:''})

    function handelClick(event){
        setForm({...form,[event.target.name]:event.target.value})
    }

    const navigate = useNavigate();
    function setAsRoute(){
        navigate('/home')
    }

    function putDestination(){
        navigate('/reRouteSignIn')
    }

    return<>
    <form>
    <input type="text" name="Name" value={form.name} onChange={handelClick} placeholder="מקור"/>
    <br></br>
    <br></br>
    <input type="text" name="Destination" value={form.destination} onChange={handelClick} placeholder="יעד"/>
    <button onClick={putDestination}>+</button>
    <br></br>
    <button onClick={setAsRoute}>הגדר כמסלול</button>
    </form>
    </>

}