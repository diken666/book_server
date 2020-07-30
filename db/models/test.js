const Sequelize = require("sequelize")
const sequelize = require("../dbConn")

const test = sequelize.define('test', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(45),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(45),
    allowNull: false
  }
}, {
  timestamps: false,
  // freezeTabelName 为 true 时不会在库中映射表时增加复数表名
  // 该选项为 true 时，user 在映射时映射成 user，而为 false 时会映射成users
  freezeTableName: true
})

module.exports = test
