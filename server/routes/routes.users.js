//HEADER SECTION - again abandoning
const express = require('express');
var cors = require('express-cors');
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// Connection URL
var url = 'mongodb://127.0.0.1:27017/stockSloth';

mongoose.connect(url);

const router = express.Router();
//HEADER SECTION

router.get('/users', (req, res) => {
        MongoClient.connect(url, function(err, db) {
            db.collection('users', function(err, collection) {
                collection.find().toArray(function(err, results) {
                    res.json(results);
            })
        });
    });
});

var userSchema = new Schema({
  id: { type: String },
  name: { type: String }
});

router.get('/user/:id', (req, res) => {
    var id = req.params.id;

    var userModel = mongoose.model('user', userSchema);
    console.log(id);
    userModel.findOne({ '_id': id }, {}, function (err, user) {
    if (err) return handleError(err);
        console.log(user) // Space Ghost is a talk show host.
        res.json(user);
    });
    
});

