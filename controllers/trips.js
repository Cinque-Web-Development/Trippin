const Trip = require('../models/trip');

module.exports = {
    create,
};

function create(req, res) {
    Trip.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}