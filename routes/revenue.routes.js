const router = require('express').Router();
const {RevenueControllers} = require('../controllers');

router.get('/revenues', RevenueControllers.getAllRevenues);
module.exports = router