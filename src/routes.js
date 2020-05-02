const express = require('express')
const ApartmantController = require('./controller/ApartmantController')
const routes = express.Router()

routes.post('/apartmant', ApartmantController.add)
routes.get('/apartmant', ApartmantController.list)
routes.delete('/apartmant/:id', ApartmantController.delete)

module.exports = routes;