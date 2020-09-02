const router = require('express').Router();
const googlePlacesAPICtrl = require('../controllers/googlePlacesAPI');


router.post('/', checkAuth, googlePlacesAPICtrl.searchCities);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;