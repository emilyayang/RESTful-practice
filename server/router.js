const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/getAFirstName', controller.first);
router.get('/getAMiddleName', controller.middle);
router.get('/getALastName', controller.last);

module.exports = router;