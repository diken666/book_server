const express = require('express');
const router = express.Router();
const config = require('../db/dbConfig').config
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)


/* GET home page. */
router.get('/', function(req, res, next) {
  let test = bookshelf.Model.extend({
    tableName: 'test'
  })
  // // 检索所有数据
  // test.forge().fetchAll().then(function(data) {
  //   res.json({message: 'done', data: data});
  // }).catch(function(err) {
  //   res.json({message: 'error', data: err});
  // });

  // 检索单条数据
  test.forge().query({
    where: {
      id: 1
    }
  }).fetch().then((data) => {
    res.json({
      message: "done",
      data: data
    })
  }).catch(err => {
    console.log(err)
    res.json({
      message: "err",
      data: err
    })
  })

  // // 添加单条记录
  // new test({
  //   name: "kkk",
  //   type: "123333"
  // }).save().then(data => {
  //   res.json({
  //     message: "done",
  //     data: data
  //   })
  // }).catch(err => {
  //   res.json({
  //     message: "error",
  //     data: err
  //   })
  // })

  // // 更新某一条数据
  // test.forge().where('id', '=', 3)
  //     .save({
  //       name: "qwe",
  //       type: "ewq"
  //     }, {patch: true}).then(data => {
  //       res.json({
  //         message: "done",
  //         data
  //       })
  // }).catch(err => {
  //   res.json({
  //     message: "error",
  //     data: err
  //   })
  // })

  // // 删除某一条数据
  // test.forge()
  //     .where('id', '=', 5)
  //     .destroy()
  //     .then(data => {
  //       res.json({
  //         message: "done",
  //         data
  //       })
  //     })
  //     .catch(error => {
  //       res.json({
  //         message: "error",
  //         data: error
  //       })
  //     })

});

module.exports = router;
