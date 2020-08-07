const express = require("express")
const router = express.Router()
const request = require("request")
const wxConfig = require("../wxconfig/config")

router.post('/', (req, res, next) => {
  let { token } = req.headers
  let { circle_name, circle_avatar } = req.body
  console.log(token, circle_name, circle_avatar)
  if (token) {
    request.get({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${wxConfig.appId}&secret=${wxConfig.appSecret}&js_code=${token}&grant_type=authorization_code`
    }, (err, response, body) => {
      res.json({
        code: 1,
        body,
        err
      })
    })
  } else {
    res.json({
      code: 401,
      statusMsg: "未登录或登录状态过期"
    })
  }
})

module.exports = router
