const API_KEY = "7f7e420103f38b1bd9258c7b6e73fd7e";
const COORDS = "coords";

function getWeather(lat, lon) {

}

function saveCoordes(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoordes(coordsObj);
    getWeather(latitude, longitude); 
}

function handleGeoError() {
    console.log("Cant access geo location.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords == null) {
        askForCoords();
    } else {

    }
}

function init() {
    loadCoords();
}

init();