const express = require('express')

const weatherAPI = require('../models/weather.js')

const weatherRouter = express.Router()

weatherRouter.get('/,', (req, res) => {
    weatherAPI.getAllWeather()
    .then((allWeather) => {
        res.json(allWeather)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

weatherRouter.get('/:weatherId', (req, res) => {
    weatherAPI.getOneExpense(req.params.weatherId)
    .then((oneWeather) => {
        res.json(oneWeather)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//create

weatherRouter.post('/', (req, res) => {
    weatherAPI.createWeather(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//delete

weatherRouter.delete('/:weatherId', (req, res) => {
    weatherAPI.deleteIncome(req.params.weatherId)
    .then(() => {
        res.json("deleted")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    weatherRouter
}