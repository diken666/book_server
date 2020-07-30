const Sequelize = require("sequelize")

const config = {
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "bookshare"
}
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    idle: 10000
  }
});
module.exports = sequelize;
