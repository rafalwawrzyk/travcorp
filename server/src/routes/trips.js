// imports
const express = require('express');
const { getTrips } = require('../controllers/trips.js');

// express router set
const router = express.Router();

// create trips route
router.get('/', getTrips);

module.exports = router;