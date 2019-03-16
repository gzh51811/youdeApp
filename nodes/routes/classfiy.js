var express = require('express');
var router = express.Router();
let db = require('../public/javascripts/index.js');

/* GET users listing. */
router.get('/',async function(req, res, next) {
  //查询所有数据
    let str = await db.find("category",{});
    
  res.send(str);
});

module.exports = router;