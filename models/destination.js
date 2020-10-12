const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    location: String,
    date: Date,
    attractions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attraction',
    }],
}, {
    timestamps:true
});

module.exports = mongoose.model('Destination', destinationSchema)