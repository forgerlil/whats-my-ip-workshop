import "./App.css";
import { Map, Marker } from 'pigeon-maps';
import { useState, useEffect } from 'react';
import { getUserInfo } from './fetches/fetches';
import locationmarker from './pointer.png'
import calendarIcon from './calendar.png';
import { DateTime } from 'luxon';


function App() {
  const [ipInfo, setIpInfo] = useState({});

  const [dateTime, setDateTime] = useState(DateTime.local());
  
  useEffect(() => {
    // Keep this commented out unless there's need to check fetch results, as fetch qty is limited (free api sub)!
    // (async () => {
    //   setIpInfo(await getUserInfo())
    // })();
    const startInterval = setInterval(() => setDateTime(DateTime.local()), 1000)

  return () => clearInterval(startInterval)
  }, [])

  

  return (
    ipInfo &&
    <div className="root-wrapper">
      {ipInfo.lat}
      {/* <Map defaultCenter={[ipInfo.lat, ipInfo.lat]} defaultZoom={11}> -- This isn't working! =( */}
      <Map defaultCenter={[50, 8]} defaultZoom={11}>
        <Marker width={50} anchor={[50, 8]} />
        <div className="IP-card"> 
          <div className="title-wrapper">
            <img src={locationmarker} alt="Location marker" className="marker" />
            <h1 className="IP-title"><strong>What's my IP?</strong></h1>
          </div>     
          <div className="ip-container">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="" className="flag-img" />
            <div className="ip-details-wrapper">
              <h3><strong>Your IP address is {ipInfo.ip}</strong></h3>
              <p>
                You are currently located in {ipInfo.city}, {ipInfo.country}
              </p>
            </div>
            <hr />
            <div className="date-time">
              <div className="date-wrapper">
                <img src={calendarIcon} alt="Calendar Icon" className="calendar-icon" />
                <p>Today is the {dateTime.c.day < 10 ? `0${dateTime.c.day}` : dateTime.c.day}/{dateTime.c.month < 10 ? `0${dateTime.c.month}` : dateTime.c.month}/{dateTime.c.year}</p>
              </div>
              <div className="time-wrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="Clock Icon" className="clock-icon" />
                <p>Your local time is {dateTime.c.hour < 10 ? `0${dateTime.c.hour}` : dateTime.c.hour}:{dateTime.c.minute < 10 ? `0${dateTime.c.minute}` : dateTime.c.minute}</p>
              </div>
            </div>
          </div>
        </div>
      </Map>
    </div>
  );
}

        export default App;

/*
 Questions!
 Fetching (fetches.js):
 - Does it even make sense to build and export an object out of the returned JSON and a bazillion awaits? How to do this efficiently?

 Geo IP API:
 - passing ipInfo.lat and ipInfo.lng into defaultCenter prop for Map component (line 35) breaks the render. Rendering ipInfo in a previous line hands the correct result
      fetched by the API though. The heck is happening here?
 
 Luxon:
 - const startInterval = setInterval(() => setDateTime(DateTime.local()), 1000) --- Setting an interval to fetch data every second is likely far from the best
      practice to get this sorted (even if this sort of works), not to mention it's not in sync with the actual data from the api. How to do this adequately?

  Anything else?
*/

/*
 Goals and to-dos:
 -Use Luxon to compare time between user's location and a location of choice - also requires giving the user ability to change the marker's location upon click.
 -Implement react css library - manual styles are looking good and nice but gotta learn more tech.
*/
