const Name = require('../database/models.js')

const controller = {
  first: (req, res) => {
    Name.findAll({
      where: {
        typeOfName: "first"
      }
    })
      .then(names => {
        res.status(200).send(names)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
  middle: (req, res) => {
    Name.findAll({
      where: {
        typeOfName: "middle"
      }
    })
      .then(names => {
        res.status(200).send(names)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  },
  last: (req, res) => {
    Name.findAll({
      where: {
        typeOfName: "last"
      }
    })
      .then(names => {
        res.status(200).send(names)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = controller;
