const express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    config = require('../config.json');

router.get('/images', function(req, res, next) {
    res.json(fs.readdirSync(config.imagefolder));
});


router.get('/image/:index', function(req,res,next) {
    let images = fs.readdirSync(config.imagefolder);
    let index = parseInt(req.params.index);
    let result = {
        data: '/gallery/' + images[index], 
        next: index >= images.length - 1 ? 0 : index + 1
    };
    res.json(result);
});
module.exports = router;
