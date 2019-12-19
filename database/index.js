const Sequelize = require('sequelize');

const db = new Sequelize('names', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

db
  .authenticate()
  .then(() => {
    console.log('Connected to db');
  })
  .catch(err => {
    console.error('Unable to connect to db:', err);
  });

module.exports = db;