
const request = require('request')
function weather_api(address, callback) {

    const url = 'http://api.weatherstack.com/current?access_key=16cc6777fba1f2f091c1573430c4d3cd&query=' + address;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } 
        else if(response.body.error)
         {
            return callback('Unable to find location',undefined)
         }
           else{ const data = response.body

            callback(undefined, {
                location: data.location.name,
                region: data.location.region,
                country: data.location.country,
                weather: data.current.weather_descriptions[0],
                temp: data.current.temperature
            })


           
        }})
}



module.exports = weather_api

