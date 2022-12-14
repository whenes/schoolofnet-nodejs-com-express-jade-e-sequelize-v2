const sequelize = require('./index');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, 
  { timestamps: false });
};