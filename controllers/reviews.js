const Review = require('../models/review');

module.exports = {
    create,
};

function create(req, res) {
    Review.create(req.body)
    .then(trip => res.json(trip))
    .catch(err => res.json(err))
}