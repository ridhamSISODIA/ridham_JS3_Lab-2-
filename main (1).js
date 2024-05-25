const api = {
    key: "7e3f21edee540e6110af347b55eb1ab2",
    base: "https://api.openweathermap.org/data/2.5/weather"
}

//Add an event listener
//keypress... call a method


const searchBox = document.querySelector(".search-box");
searchBox.addEventListener('keypress', setQuery);

function setQuery(e) {
  console.log(e);
  if (e.keyCode === 13) {
    getWeatherInfo(searchBox.value);
  }
}

// IOC
// callback hell

function updateTemp(){

}

function getWeatherInfo(query, updateTemp){
    // get weather.. 
    // updateTemp
}


//container for future value is called as promise
function getWeatherInfo(query){
    //promise = call the api .. async
    // // Promise.then(()=>{

    // })
    //console.log
    //foreach
    //if
    // ajax is focussed on fetch or xmlhttprequest interface
    const url = `${api.base}?q=${query}&units=metric&appid=${api.key}`
    let promise = fetch(url);
    console.log(promise);
    promise.then((response)=>{
        return response.json();
    }).then((weatherResponse)=>{
        console.log(weatherResponse);
        if(weatherResponse.cod === 200){
            console.log("all good to update dom");
            displayResults(weatherResponse);
        }else{
            alert(weatherResponse.message);
        }
    }).catch((err)=>console.log(err));

}

function displayResults(weatherInfo) {
    console.log("Display to be updated");
    // city=> weatherInfo.name & weatherInfo.sys.coutry
    // temp => weatherInfo.main.temp
  
    // weather => weatherInfo.weather[0].main
    // hi-low => min& max temp to be displayed 
    let city = document.querySelector('.city');
    city.innerText = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weatherInfo.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weatherInfo.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weatherInfo.main.temp_min)}°c / ${Math.round(weatherInfo.main.temp_max)}°c`;
  }

  function dateBuilder(d) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  
    const DATE_FORMAT_OPTIONS = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZoneName: "short",
    }
    return d.toLocaleDateString("en-US",DATE_FORMAT_OPTIONS)
    // return `${day}, ${date} ${month} ${year}`
  }
  
