const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=91d17760584d52a3f64044f61b804c8f&units=metric'

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
        callback('Unable to Connect to the weather service!', undefined)
    } else if (body.message) {
         callback('Unable to find location!', undefined)
    } else {
          callback(undefined,  'It is currently ' + body.main.temp + '°C' + 
          ' out. It feels like ' + body.main.feels_like + '°C. ' + 'The humidity level is ' + body.main.humidity + '%' +
           'The weather description is ' + body.weather[0].description)
    }
  })
}

module.exports = forecast