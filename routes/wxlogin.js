const express = require("express")
const router = express.Router()
const request = require("request")
const wxConfig = require("../wxconfig/config")

router.post('/', (req, res, next) => {
  let { code, name, avatar } = req.body
  // console.log(code, name, avatar)
  console.log(req.headers.token)
  if (code) {
    request.get({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${wxConfig.appId}&secret=${wxConfig.appSecret}&js_code=${code}&grant_type=authorization_code`
    }, (err, response, body) => {
      if (response.statusCode === 200) {
        let { openid, errmsg } = JSON.parse(body)
        // console.log(openid, response)
        res.json({
          code: 1,
          msg: errmsg || "登录成功"
        })
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
