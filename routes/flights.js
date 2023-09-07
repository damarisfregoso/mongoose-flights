const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flight');

//GET /flights
router.get('/', flightsCtrl.index);
//GET /flights/new
router.get('/new', flightsCtrl.new);
//show must be below new
router.get('/:id', flightsCtrl.show);
//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
