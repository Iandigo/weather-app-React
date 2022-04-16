import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (postion) {
      setLat(postion.coords.latitude);
      setLong(postion.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitudae is:", long);
  }, [lat, long]);

  return <div className="App"></div>;
}

export default App;
