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
router.all('*', cors({
    allowedOrigins: [
        'github.com', 'google.com', 'localhost'
    ]
}));

var userSchema = new Schema({
  id: { type: String },
  name: { type: String }
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/users', (req, res) => {
        MongoClient.connect(url, function(err, db) {
            db.collection('users', function(err, collection) {
                collection.find().toArray(function(err, results) {
                    res.json(results);
            })
        });
    });
});

router.get('/user/:id', (req, res) => {
    var id = req.params.id;

    var userModel = mongoose.model('user', userSchema);
    console.log(id);
    userModel.findOne({ '_id': id }, {}, function (err, user) {
    if (err) return handleError(err);
        res.json(user);
    });
});

router.get('/api', (req, res) => {
    var id = req.params.id;

    var userModel = mongoose.model('user', userSchema);
    console.log(id);
    userModel.findOne({ '_id': id }, {}, function (err, user) {
    if (err) return handleError(err);
        res.json(user);
    });
});

var path = require('path'),
    fs = require('fs');
router.post('/upload', function (req, res) {
    var tempPath = req.files.file.path,
        targetPath = path.resolve('./uploads/image.png');
    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
    } else {
        fs.unlink(tempPath, function () {
            if (err) throw err;
            console.error("Only .png files are allowed!");
        });
    }
    // ...
});


module.exports = router;