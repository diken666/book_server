const express = require('express');
const router = express.Router();
const config = require('../db/dbConfig').config
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)


/* GET home page. */
router.get('/', function(req, res, next) {
  let user = bookshelf.Model.extend({
    tableName: 'user',
  });
  user.forge().fetchAll().then(function(user) {
    res.json({message: 'done', data: user});
  }).catch(function(err) {
    res.json({message: 'error', data: err});
  });
});

module.exports = router;
