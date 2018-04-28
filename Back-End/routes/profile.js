var express = require('express');
var router = express.Router();
var multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage }).single('profileImage');


router.post('/profile', function (req, res) {
  console.log ("inside /profile");
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            res.send("error ya Shahd")
        }
        res.json({
            success: true,
            message: 'Image uploaded!'
        });

        // Everything went fine
    })
});


module.exports = router;
