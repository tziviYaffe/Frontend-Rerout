import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MapContainer from "../components/mapContainer";
import { getOptimalRoute } from "../services/algorithm.service";
import GoogleMaps from "../components/trailAoutoComplete";
import { Grid } from "@mui/material";
import ExcelReader from "../components/loadFile";
export default function ReRouteSignUp() {
  const [source, setSource] = React.useState("");
  const [arrDest, setArrDest] = React.useState([""]);

  //הוספה
  function addDestination() {
    setArrDest([...arrDest, ""]);
  }

  //מחיקה
  function deleteItem(index) {
    setArrDest(arrDest.filter((item, i) => i !== index));
  }

  const navigate = useNavigate();
  function setAsRoute() {
    navigate("/home");
  }

  function putDestination() {
    navigate("/reRouteSignIn");
  }

  //פונקציה זאת מפעילה את האלגוריתם בצד השרת
  async function checkShortRoute() {
    console.log(arrDest);
    console.log(source);
    const route = await getOptimalRoute(source, arrDest);
    console.log(route);
  }

  const updateDestination = (index) => (event) => {
    const arrCopy = [...arrDest];
    arrCopy[index] = event.target.value;
    setArrDest(arrCopy);
  };

  return (
    <Grid container sx={{ direction: "rtl", height: "100%" }}>
      <Grid item xs={12} textAlign="center">
        <button onClick={checkShortRoute}>בדיקת המסלול הקצר</button>
        <button onClick={setAsRoute}>הגדר כמסלול</button>
      </Grid>
      <Grid item xs={4}>
        <GoogleMaps
          txt="מקור"
          value={source}
          onBlur={(event) => setSource(event.target.value)}
        />
        <button onClick={() => addDestination()}>+</button>
        {arrDest.map((dest, index) => (
          <div key={index}>
            <GoogleMaps
              txt="יעד"
              value={dest}
              onBlur={updateDestination(index)}
            />
            <button className="button" onClick={() => deleteItem(index)}>
              x
            </button>
          </div>
        ))}
      </Grid>
      <Grid>
        <ExcelReader />
      </Grid>
      <Grid item xs={6}>
        <MapContainer />
      </Grid>
    </Grid>
  );
}
