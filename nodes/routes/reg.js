var express = require('express');
var router = express.Router();
let db = require('../public/javascripts/index.js');

/* GET users listing. */
router.post('/', async function (req, res, next) {
  //查询所有数据
  // let str = await db.find("goods",{});
  let { username, password } = req.body;
  let data = {
    username,
    password,
    regtime: Date.now()
  }
  let chaxun = await db.find('user', { username });
  console.log(chaxun);
  if (chaxun.length > 0) {
    res.send("用户名已存在")
  } else {
    let result = await db.insert('user', data);
    if (result.result.ok) {
      res.send("yes");
    } else {
      res.send("no");
    }
  }
});

module.exports = router;