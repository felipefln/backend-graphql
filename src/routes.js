const express = require('express')
const ApartmantController = require('./controller/ApartmantController')
const routes = express.Router()

routes.post('/create', ApartmantController.add)
routes.get('/list', ApartmantController.list)

module.exports = routes;