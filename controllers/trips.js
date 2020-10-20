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
    console.log(req.body)
    Trip.create({
        start: req.body.formData.start,
        end: req.body.formData.end,
        user: req.user._id
    })
    .then(trip => {
        trip.destinations.push({location: req.body.formData.destination})
        trip.save()
        return trip
    })
    .then(trip => {
        console.log(trip)
        res.json(trip)
    })
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Trip.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}