const express = require('express');
const router = express.Router();
const tripCtrl = require('../controllers/trips')

router.post('/', tripCtrl.create);

router.use(require('../config/auth'));

module.exports = router;