const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews')

router.post('/reviews', reviewCtrl.create);

router.use(require('../config/auth'));

module.exports = router;