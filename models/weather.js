const mongoose = require('./connection.js')

const WeatherSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
})

const WeatherCollection = mongoose.model('Weather', WeatherSchema)

const getAllWeather = () => {
    return WeatherCollection.find()
} 

const getOneWeather = (weatherId) => {
    return WeatherCollection.findById(weatherId)
}

//create

const createWeather = (newWeather) => {
    return WeatherCollection.create(newWeather)
}

//delete

const deleteWeather = (weatherId) => {
    return WeatherCollection.delete({_id:weatherId})
}

module.exports = {
    getAllWeather,
    getOneWeather,
    createWeather,
    deleteWeather
}