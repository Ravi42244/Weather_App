const request = require('request');

function weather(address,callback){
const url = 'http://api.weatherstack.com/current?access_key=3102d50d2d7db820062a3349821c72f6&query=' + address;

request({ url, json: true }, (error, response) => {
    const data = response.body
    // if (data.error) {
    //      return console.log('Enter valid location')
    // }
   callback(undefined,{ 
       location:data.location,
    region:data.location.region,
    country:data.location.country,
    weather:data.current.weather_descriptions[0],
    temp:data.current.temperature
   })


})}
module.exports=weather;