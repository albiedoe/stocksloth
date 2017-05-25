const express = require('express');
var cors = require('express-cors');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://127.0.0.1:27017/stockSloth';

const router = express.Router();
router.all('*', cors({
    allowedOrigins: [
        'github.com', 'google.com', 'localhost'
    ]
}));


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/quotes', (req, res, next) => {
  debugger
  console.log("received.");
  console.log(req.body);

    MongoClient.connect(url, function(err, db) {
        var col = db.collection('createIndexExample1');
        console.log(col.count());

        db.close();
    });
//   MongoClient.connect('mongodb://127.0.0.1:27017/stockSloth', (err, database) => {
//     // Set our internal DB variable

//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var userEmail = req.body.useremail;
//     // Set our collection
//     var collection = database.get('usercollection');

//     collection.insert({
//         "username" : userName,
//         "email" : userEmail
//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // And forward to success page
//             res.redirect("userlist");
//         }
//     });
// });

  console.log("fin");
        res.body = "hi";
        res.send("hi from the server");
});

module.exports = router;