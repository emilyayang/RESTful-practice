const Sequelize = require('sequelize');
const db = require('./index.js');

const Name = db.define('name', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  typeOfName: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

db.sync();

module.exports = Name;