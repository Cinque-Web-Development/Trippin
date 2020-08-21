const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
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