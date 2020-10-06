const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
    name: String,
    time: Date,
    aType: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
}, {
    timestamps:true
});

module.exports = mongoose.model('Attraction', attractionSchema)