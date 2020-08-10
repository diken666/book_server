const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const wxConfig = require("../wxconfig/config")
const Circle = require("../db/models/circle")
const CircleUser = require("../db/models/circleUser")
const sequelize = require('../db/dbConn')
const { createHash } = require("../utils/util")

router.post('/', (req, res, next) => {
  let { token } = req.headers
  let { circle_name, circle_avatar } = req.body
  console.log(token, circle_name, circle_avatar)

  // 判断请求是否带有token， 没有则返回401
  if (token) {
    try {
      let { uid } =  jwt.verify(token, wxConfig.signSecret)
      if (uid) {
        sequelize.transaction(async t => {
          // 暂时不做创建圈子的数量限制
          // let result = await CircleUser.count({
          //   where: { uid }
          // })
          // console.log(result)
          let timeStamp = new Date().getTime().toString()
          let cid = createHash(8)
          // 创建圈子
          await Circle.create({
            cid,
            circle_name,
            circle_avatar,
            uid,
            create_time: timeStamp
          }, { transaction: t })
          // 创建用户圈子记录
          await CircleUser.create({
            uid,
            cid,
            is_owner: 1,
            is_admin: 1,
            join_time: timeStamp,
            update_time: timeStamp
          }, {transaction: t})
          res.json({
            code: 1,
            msg: "创建成功"
          })
        }).catch(e => {
          console.log(e)
          res.json({
            code: 0,
            msg: "创建圈子失败"
          })
        })
      } else {
        res.json({
          code: 401,
          msg: "登录状态过期，请重新登录"
        })
      }
    } catch (e) {
      console.log(e)
      res.json({
        code: 401,
        msg: "登录状态过期，请重新登录"
      })
    }
  } else {
    res.json({
      code: 401,
      msg: "请重新登录"
    })
  }
})

module.exports = router
