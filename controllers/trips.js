const Trip = require('../models/trip');

module.exports = {
    getUserTrips,
    getTripDetails,
    create,
    delete:deleteOne,
    update
};

function getUserTrips(req, res) {
    Trip.find({user:req.params.id})
    .then(trips => res.json(trips))
    .catch(err => res.json(err))
}

function getTripDetails(req, res) {
    Trip.findById(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function create(req, res) {
    Trip.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function update(req, res) {
    Trip.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}