const Sequelize = require("sequelize")
const sequelize = require("../dbConn")

const CircleUser = sequelize.define('circle_user', {
  id: {
    type: Sequelize.INTEGER(),
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  uid: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  cid: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  is_owner: {
    type: Sequelize.INTEGER(),
    allowNull: true,
  },
  is_admin: {
    type: Sequelize.INTEGER(),
    allowNull: true,
  },
  join_time: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  update_time: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = CircleUser
