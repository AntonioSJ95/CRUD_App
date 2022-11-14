const express = require('express');
const route = express.Router();

const services = require('../services/render');

//@Description Root Route
//@Method GET
route.get('/', services.homeRoutes)

//@Description Add User Route
route.get('/add-user', services.add_user)

//@Description Update User Route
route.get('/update-user', services.update_user)

module.exports = route