const Review = require('../models/review');

module.exports = {
    create,
    delete:deleteOne
};

function create(req, res) {
    Review.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
    Review.findByIdAndDelete(req.params.id)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}