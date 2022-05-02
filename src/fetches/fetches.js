const getUserInfo = async () => {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`)
    const json = await response.json();

    // const json = {
    //     "ip": "84.162.165.246",
    //     "location": {
    //         "country": "DE",
    //         "region": "Hessen",
    //         "city": "Frankfurt am Main",
    //         "lat": 50.11552,
    //         "lng": 8.68417,
    //         "postalCode": "60559",
    //         "timezone": "+02:00",
    //         "geonameId": 2925533
    //     },
    //     "domains": [
    //         "pzxzilxbzvswrqcc.myfritz.net"
    //     ],
    //     "as": {
    //         "asn": 3320,
    //         "name": "DTAG",
    //         "route": "84.128.0.0/10",
    //         "domain": "https://globalcarrier.telekom.com",
    //         "type": "NSP"
    //     },
    //     "isp": "Deutsche Telekom AG"
    // }

    // After you await the json its just a normal value don't have to await each proprty
    const userLocation = {
        ip: json.ip,
        country: json.location.country,
        city: json.location.city,
        location: [json.location.lat, json.location.lng],
        timezone: json.location.timezone
    }

    // console.log(userLocation)

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