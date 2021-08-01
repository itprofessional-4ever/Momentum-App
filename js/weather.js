const API_KEY = "5a68e59c1de922966b0210c58c1f9064";
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            const name = data.name;
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;   
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you!")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);