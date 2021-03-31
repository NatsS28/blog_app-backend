const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posttext: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    likes:{
        type: Number,
        default:0
    }
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

module.exports = User;