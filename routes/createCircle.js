const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const wxConfig = require("../wxconfig/config")

router.post('/', (req, res, next) => {
  let { token } = req.headers
  let { circle_name, circle_avatar } = req.body
  console.log(token, circle_name, circle_avatar)
  // console.log(CryptoJS.SHA256("Message"))
  try {
    let ss = jwt.sign({
      "jti": 1,
    }, "secret", { expiresIn: 1 })
    console.log(ss)
    setTimeout(() => {
      console.log(jwt.verify(ss, "secret"))
    }, 2000)

  } catch (e) {
    console.log(e)
  }
  if (token) {
    res.json({
      code: 1,
      msg: "123"
    })
  } else {
    res.json({
      code: 401,
      statusMsg: "未登录或登录状态过期"
    })
  }
})

module.exports = router
