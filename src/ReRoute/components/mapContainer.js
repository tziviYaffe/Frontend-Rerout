// import React from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import "./style.css";

// function MapContainer(props) {
//   return (
//     <Map
//       google={props.google}
//       zoom={14}
//       initialCenter={{ lat: 32.076421, lng: 34.836182 }}
//       language={"he"}
//     />
//   );
// }

// const MapWrapper = GoogleApiWrapper({
//   apiKey: "AIzaSyC-h2NN-Q6I5pPakvopHj6LUFZRtpnfyoI",
// })(MapContainer);

// export default () => {
//   return (
//     <div className="mapContainer">
//       <MapWrapper />
//     </div>
//   );
// };
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./style.css";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 32.076421,
  lng: 34.836182
};

function MapContainer() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-h2NN-Q6I5pPakvopHj6LUFZRtpnfyoI" language="he">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      />
    </LoadScript>
  );
}

export default () => {
  return (
    <div className="mapContainer">
      <MapContainer />
    </div>
  );
};

