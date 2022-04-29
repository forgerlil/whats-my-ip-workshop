const getUserInfo = async () => {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`)
    const json = await response.json();
    // console.log(json)
    const ip = await json.ip;
    const country = await json.location.country;
    const city = await json.location.city;
    const lat = await json.location.lat;
    const lng = await json.location.lng;
    const timezone = await json.location.timezone;

    const userLocation = {
        ip: ip,
        country: country,
        city: city,
        lat: lat,
        lng: lng,
        timezone: timezone
    }

    return userLocation;
}

export { getUserInfo }


// mock JSON return from Geo IP API
// {
//     "ip": "2.204.228.10",
//     "location": {
//       "country": "DE",
//       "region": "Hessen",
//       "city": "Frankfurt am Main",
//       "lat": 50.11552,
//       "lng": 8.68417,
//       "postalCode": "60559",
//       "timezone": "+02:00",
//       "geonameId": 2925533
//     },
//     "domains": [
//       "dslb-002-204-228-010.002.204.pools.vodafone-ip.de",
//       "ip-2-204-228-10.web.vodafone.de"
//     ],
//     "as": {
//       "asn": 3209,
//       "name": "VODANET",
//       "route": "2.204.0.0/14",
//       "domain": "http://www.vodafone.de",
//       "type": "Cable/DSL/ISP"
//     },
//     "isp": "Vodafone GmbH"
//   }