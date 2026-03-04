let mongoose = require('mongoose');
let moment = require('moment');
let Posts = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: moment(Date.now()).format("DD/MM/YYYY")
    },
    image: {
        caption: {
            type: String,
            required: true
        },
        img:{
            data: Buffer,
            contentType: String
        }
    }
}, { collection: "Posts" });
module.exports = mongoose.model('Posts',Posts);