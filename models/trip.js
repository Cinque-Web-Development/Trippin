const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    destinations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
    }],
}, {
    timestamps:true
});

module.exports = mongoose.model('Trip', tripSchema)