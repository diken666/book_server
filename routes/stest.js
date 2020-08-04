const express = require('express');
const router = express.Router();
const Test = require('../db/models/test')

router.get('/', function(req, res, next) {
  // 增加数据
  // Test.create({
  //   name: "123",
  //   type: "asd"
  // })

  // 查找单条数据
  // let data = Test.findOne({
  //   where: {
  //     id: 1
  //   }
  // })

  // 查找多条数据
  let data = Test.findAll()

  // 修改数据
  // let data = Test.update({
  //   name: "jasd"
  // }, {
  //   where: {
  //     id: 2
  //   }
  // })

  // // 删除数据
  // let data = Test.destroy({
  //   where: {
  //     id: 2
  //   }
  // })
  console.log(req.cookies)
  data.then(info => {
    res.json({
      code: 1,
      msg: "ok",
      data: info,
      cookie: req.cookies
    })
  }).catch(err => {
    res.json({
      code: 0,
      msg: "error",
      data: err
    })
  })

})

module.exports = router
