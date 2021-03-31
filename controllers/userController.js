const { response } = require('express');
const User = require('../models/user');

const mongoose = require("mongoose");

require("dotenv").config();


const posting = (req, res, next) => {


    const user = new User({
        title: req.body.title,
        posttext: req.body.posttext,
        username: req.body.username
    });
    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Post created"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}


//for updating likes 
const update = (req, res, next) => {
    let userId = req.params.id

    console.log("in backend" + userId);


    /*  User.findByIdAndUpdate(userId, update[{ $set: { $inc: { likes: 1, } } }])
          .then(() => {
              res.json({
                  message: 'user updated  successfully'
              })
  
          }).catch(error => {
              console.log(error);
              res.json({
  
                  message: 'Error occured'
              })
          })*/

    User.findOneAndUpdate(
        { _id: userId },
        { $inc: { likes: 1 } }
    ).then(response => {
        res.json({
            message: 'success'
        })
    }).catch(error => {
        res.json({
            message: 'Error occured'
        })
    })

}



const display = (req, res, next) => {
    //  console.log("called");
    User.find()
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })

}



const showById = (req, res, next) => {
    let userId = req.params.id
    // console.log(userId);
    User.findById(userId)
        .then(response => {
            res.json({
                response
            })

        }).catch(error => {
            res.json({
                message: 'Error occured'
            })
        })
}



module.exports = {
    posting, display, showById, update
}


