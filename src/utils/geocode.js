const request = require('request')


const geocode = (address, callback) => {
  const url ='http://api.openweathermap.org/geo/1.0/direct?q=' + address + '&limit=5&appid=91d17760584d52a3f64044f61b804c8f'

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
        callback('Unable to connect to location services!', undefined)
    } else if (body.length === 0) {
        callback('Unable to find location. try another search', undefined)
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].name + ', ' + body[0].state + ', ' + body[0].country 
      })
    }

  })
}

module.exports = geocode