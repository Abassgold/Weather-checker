
let convertResponse;
const date = new Date();
const date1 = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
hour.innerHTML = `${date.getHours()}:${date.getMinutes()}`
const days = date.getDay() + 1;
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
if(days == 1){
    document.getElementById("month").innerHTML = `${month} ${date1}`
    document.getElementById("date").innerHTML = "Sunday"
}
else if(days == 2){
    document.getElementById("date").innerHTML = "Monday"
    document.getElementById("month").innerHTML = `${month} ${date1}`
}
else if(days == 3){
    document.getElementById("month").innerHTML = `${month} ${date1}`

    document.getElementById("date").innerHTML = "Tuesday"
}
else if(days == 4){
    document.getElementById("month").innerHTML = `${month} ${date1}`
    document.getElementById("date").innerHTML = "Wednesday"
}
else if(days == 5){
    document.getElementById("month").innerHTML = `${month} ${date1}`
    document.getElementById("date").innerHTML = "Thursday"
}
else if(days == 6){
    document.getElementById("month").innerHTML = `${month} ${date1}`
    document.getElementById("date").innerHTML = "Friday"
}
else{
    document.getElementById("date").innerHTML = "Saturday"
    document.getElementById("month").innerHTML = `${month} ${date1}`
}
const weatherChecker = async () => {
    let myApi = "7d13690828aa778c079e1718b6412e60"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${InputCity.value}&appid=${myApi}`
    let response = await fetch(url);
    console.log(response);
    convertResponse = await response.json();
    console.log(convertResponse);
    // load.innerHTML = ""
    // show.innerHTML = `
    // <h1>${convertResponse.base}</h1>
    // <h1>${convertResponse.timezone}</h1>
    // <h1>${convertResponse.clouds.all}</h1>
    // <h1>${convertResponse.name}</h1>
    // `
    description.innerHTML = `${convertResponse.weather[0].description}`
 //   description2.innerHTML = `${convertResponse.weather[0].description}`
    const degreeOftemperature = Math.round(convertResponse.main.temp - 272.26);
    Weather.innerHTML = `${degreeOftemperature}℃`
    Weather2.innerHTML = `${degreeOftemperature}℃`
    country.innerHTML = `${convertResponse.name}, ${convertResponse.sys.country}`;
    windspeed.innerHTML = `${convertResponse.wind.speed} m/s`
    cloud.innerHTML = `${convertResponse.clouds.all}`
    sunrise.innerHTML = `${convertResponse["sys"]["sunset"]/2}`
    sunset.innerHTML = `${convertResponse["sys"]["sunrise"]}`
    lon.innerHTML = `${convertResponse.coord.lon}`
    lat.innerHTML = `${convertResponse.coord.lat}`
    humidity.innerHTML = `${convertResponse.main.humidity}`
    pressure.innerHTML = `${convertResponse.main.pressure}`
    visbility.innerHTML = `${convertResponse.visibility}`


    const visibility = convertResponse.visibility / 1000;
  //  visbility.innerHTML = `${visibility}`
//    convertResponse.map((user, index)=>{
//        show.innerHTML += `
//        <h1>${user.base}</h1>
//        <h1>${user.timezone}</h1>
//        `
//    })
}