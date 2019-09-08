const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    config = require('../config.json');

/* GET home page. */
router.get('/images', function(req, res, next) {
    res.json(fs.readdirSync(config.imagefolder));
});

router.get('/images/:index', function(req,res,next) {
    let imagepath = fs.readdirSync(config.imagefolder)[req.params.index];
    res.send('/gallery/' + imagepath);
});

module.exports = router;
