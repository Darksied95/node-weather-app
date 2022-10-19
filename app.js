const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// forecast(50.39931, 1.5693, (err, res) => {
//     console.log('err', err);
//     console.log(`It is currently  ${res.temperature} degress out. It feels like ${res.feelslike} degress out.`)
// })



geocode('Lagos', (err, res) => {

    if (err) return console.log(err)

    forecast(res.lat, res.long, (err, forecastRes) => {
        if (err) return console.log(err)

        console.log(`It is ${forecastRes.temperature} degrees outside but feels like ${forecastRes.feelslike} degrees`)
    })
})
