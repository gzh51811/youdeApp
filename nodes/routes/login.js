var express = require('express');
var router = express.Router();
let db = require('../public/javascripts/index.js');


router.get('/', async function (req, res, next) {
    let { username,password} = req.query
    let str = await db.find("user",{username,password});
    console.log(str);
    if(str.length>0){
        res.send('yes')
    }else{
        res.send('no');
    }
   
});

module.exports = router;
