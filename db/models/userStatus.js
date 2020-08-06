const Sequelize = require("sequelize")
const sequelize = require("../dbConn")

const userStatus = sequelize.define('user_status', {
  uid: {
    type: Sequelize.STRING(40),
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  token: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  update_time: {
    type: Sequelize.STRING(50),
    allowNull: true
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = userStatus
