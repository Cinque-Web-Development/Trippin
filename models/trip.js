const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    location: String,
    attractions: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Attraction'
    }],
})

const tripSchema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    destinations: [destinationSchema],
}, {
    timestamps:true
});

module.exports = mongoose.model('Trip', tripSchema)