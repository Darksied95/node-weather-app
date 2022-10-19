const request = require('postman-request')


function forecast(latitude, longitude, callback) {
    const url = 'http://api.weatherstack.com/current?access_key=9408cd64ecc47f8960b0391b0e503d7d&query=' + latitude + ',' + longitude
    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to server', undefined)
        } else {
            const { temperature, feelslike } = res.body.current
            callback(undefined, { temperature, feelslike })
        }
    })

}

module.exports = forecast