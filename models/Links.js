let mongoose = require('mongoose');
let Links = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    facilitator: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    class: {
        type: String,
            required: true
    },
    link: {
        type: String,
        required: true
    }
}, { collection: 'links' })

module.exports = mongoose.model('Links', Links)