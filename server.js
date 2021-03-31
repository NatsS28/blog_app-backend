const express = require("express");
const path = require('path');
var cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const UserRoute = require('./routes/user');
const mongoose = require('mongoose');


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const connectDB = async () => {
    mongoose.set('useFindAndModify', false);
    await mongoose.connect('mongodb+srv://user:user@createpost.ce0xg.mongodb.net/post?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });

}

connectDB();




const PORT = process.env.PORT || 9999;
//port connection

app.listen(PORT, () => {
    console.log("Server Started");
})

app.use(cors());

app.use('/api/user', UserRoute);