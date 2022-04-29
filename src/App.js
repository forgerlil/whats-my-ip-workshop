import "./App.css";
import { Map, Marker } from "pigeon-maps";
import { useState, useEffect } from "react";
import { getUserInfo } from "./fetches/fetches";

/*
 Needed data: 
   User Ip, ***CHECK***
   Get Geolocation based on IP to pass to anchor in Marker component
*/

function App() {
  const [ipInfo, setIpInfo] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     setIpInfo(await getUserInfo())
  //   })();

  // }, [])

  return (
    <>
      <Map height={600} defaultCenter={[50.11552, 8.68417]} defaultZoom={11}>
        {/* <Marker width={50} anchor={[ipInfo.lat, ipInfo.lng]} /> */}
        {/* <img className="bg-img" src="" alt="" /> */}
        <div className="ip-container">
          <div className="title-wrapper">
            <img src="" alt="" />
            <h1>What's my IP?</h1>
          </div>
          <img src="" alt="" />
          <div className="ip-details-wrapper">
            <p>Your IP address is {ipInfo.ip}</p>
            <p>
              You are currently located in {ipInfo.city}, {ipInfo.country}
            </p>
          </div>
          <div>
            <div className="date-wrapper">
              <img src="" alt="" />
              <p>Today is the DD/MM/YYYY</p>
            </div>
            <div className="time-wrapper">
              <img src="" alt="" />
              <p>Your local time is HH:MM</p>
            </div>
          </div>
        </div>
      </Map>
    </>
  );
}

export default App;
