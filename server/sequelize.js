require("dotenv").config()
const {DATABASE_URL} = process.env
const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(
  DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = {
  menu: (req, res) => {
    sequelize.query(`
      SELECT * from "Items";
    `)
    .then(dbRes => res.status(200).send(dbRes))
    .catch(err => console.log(err))
  }
}

