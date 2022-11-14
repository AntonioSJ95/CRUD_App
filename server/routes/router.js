const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller')


//@Description Root Route
//@Method GET
route.get('/', services.homeRoutes)

//@Description Add User Route
route.get('/add-user', services.add_user)

//@Description Update User Route
route.get('/update-user', services.update_user)

//API Route
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route