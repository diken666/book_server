const Sequelize = require("sequelize")
const sequelize = require("../dbConn")

const Circle = sequelize.define('circle', {
  cid: {
    type: Sequelize.STRING(50),
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  circle_name: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  circle_avatar: {
    type: Sequelize.STRING(200),
    allowNull: false
  },
  uid: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  create_time: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = Circle
