const express = require("express")
const router = express.Router()
const request = require("request")
const wxConfig = require("../wxconfig/config")
const sequelize = require('../db/dbConn')

const User = require('../db/models/user')

router.post('/', (req, res, next) => {
  let { code, name, avatar } = req.body
  let { token } = req.headers
  // console.log(code, name, avatar)
  console.log(token)
  if (code) {
    request.get({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${wxConfig.appId}&secret=${wxConfig.appSecret}&js_code=${code}&grant_type=authorization_code`
    }, async (err, response, body) => {
      if (response.statusCode === 200) {
        let { openid } = JSON.parse(body)
        if (openid) {
          // 查找是否存在该用户
          let userInfo = await User.findOne({
            where: {
              uid: openid
            }
          })
          // 当用户信息不存在时，创建该用户信息
          if (!userInfo) {
            // 事务
            sequelize.transaction(async (t) => {
              await User.create({
                uid: openid,
                name,
                avatar,
                token,
                update_time: new Date().getTime().toString()
              }, { transaction: t })
              res.json({
                code: 1,
                statusMsg: "登录成功"
              })
            }).catch(e => {
              res.json({
                code: 0,
                msg: "登录失败"
              })
            })
          } else {
            // 当用户信息存在时，视为重新授权登录
            sequelize.transaction(async t => {
              await User.update({
                name,
                avatar,
                token,
                update_time: new Date().getTime().toString()
              }, {
                where: { uid: openid },
                transaction: t
              })
              res.json({
                code: 1,
                statusMsg: "登录成功"
              })
            }).catch(e => {
              res.json({
                code: 0,
                msg: "登录失败"
              })
            })
          }
        } else {
          res.json({
            code: 0,
            msg: "登录失败，未获取到用户信息"
          })
        }
      } else {
        res.json({
          code: 0,
          msg: body
        })
      }
    })
  } else {
    res.json({
      code: 0,
      msg: "code内容不能为空"
    })
  }
})
module.exports = router
