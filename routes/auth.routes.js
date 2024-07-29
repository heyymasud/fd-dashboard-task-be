const router = require('express').Router();
const {AuthControllers} = require('../controllers');

router.post('/login', AuthControllers.login);
router.post('/register', AuthControllers.register);
module.exports = router