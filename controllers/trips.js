const Trip = require('../models/trip');

module.exports = {
    getAll,
    create,
    delete:deleteOne
};

function getAll(req, res) {
    Trip.find()
    .then(trips => res.json(trips))
    .catch(err => res.json(err))
}

function create(req, res) {
    req.body.user = req.user._id
    console.log(req.body, req.user)
    Trip.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}