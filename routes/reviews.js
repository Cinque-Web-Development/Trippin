const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews')

router.post('/', reviewCtrl.create);

router.delete('/:id', reviewCtrl.delete);



module.exports = router;