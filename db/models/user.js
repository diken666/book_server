const Sequelize = require("sequelize")
const sequelize = require("../dbConn")

const user = sequelize.define('user', {
  uid: {
    type: Sequelize.STRING(40),
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING(200),
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING(40),
    allowNull: true
  }
}, {
  timestamps: false,
  // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
  // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
  freezeTableName: true
})

module.exports = user
