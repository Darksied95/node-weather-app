const request = require('postman-request')


function geoCode(address, callback) {
    const url = 'http://api.positionstack.com/v1/forward?access_key=9c9e1ce1f4f968fa565f0b87e104f355&query=' + encodeURIComponent(address)
    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to server', undefined)
        } else if (!res.body.data.length) {
            callback('Wrong query, try again!', undefined)
        } else {
            const { latitude: lat, longitude: long, name } = res.body.data[0]
            callback(undefined, { lat, long, name })

        }
    })

}

module.exports = geoCode