Sup Martin! Made a small list of questions once you check this repo (as of 30.04):
 
 Fetching (/fetches/fetches.js):
 - Does it even make sense to build and export an object out of the returned JSON and a bazillion awaits? How to do this efficiently?

 Geo IP API:
 - passing ipInfo.lat and ipInfo.lng into defaultCenter prop for Map component (line 35) breaks the render. Rendering ipInfo in a previous line hands the correct result
      fetched by the API though. The heck is happening here?
 
 Luxon:
 - const startInterval = setInterval(() => setDateTime(DateTime.local()), 1000) --- Setting an interval to fetch data every second is likely far from the best
      practice to get this sorted (even if this sort of works), not to mention it's not in sync with the actual data from the api. How to do this adequately?

  Anything else?