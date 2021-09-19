link= "https://api.openweathermap.org/data/2.5/weather?q=attur&appid=fa538992d8f5f9618bea54d9eb146d7b";
    var request = new XMLHttpRequest();
    // with this httprequest we can acces that url 
    request.open('GET',link,true);
    // GET is a method,and specify link, value should be true 
    request.onload = function(){
        // if this link is successfully opened this function can be executed 
        var obj = JSON.parse(this.response);
        console.log(obj);
        document.getElementById('weather').innerHTML=obj.weather[0].description;
        document.getElementById('location').innerHTML=obj.name;
        document.getElementById('country').innerHTML=obj.sys.country;
        document.getElementById('temp').innerHTML=Math.round(obj.main.temp - 273.15);
        document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
    }
    if(request.status>=200 && request.status < 400){
        // it is got from api 
        var temp = obj.main.temp;
    }
    else{
        console.log("the city data is not available");
    }
    // we need to send a request to above weather link 
    request.send();