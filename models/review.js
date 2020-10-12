const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    msg: {
        type: String,
        max_length: 100
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
}, {
    timestamps:true
})

module.exports = mongoose.model('Review', reviewSchema);