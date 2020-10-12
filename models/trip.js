const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    destinations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Destination',
    }],
}, {
    timestamps:true
});

module.exports = mongoose.model('Trip', tripSchema)