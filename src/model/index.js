
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/sequelize')
//const sequelize = new Sequelize('sequelize', 'root', '12345678', { host: 'localhost', dialect: 'mysql', operatorsAliases: Sequelize.Op })
sequelize.authenticate()
  .then(() => { console.log('OK') })
  .catch((err) => { console.log(err)});

sequelize.sync();

module.exports = sequelize;