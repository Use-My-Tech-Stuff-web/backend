
const db = require('../database/db.config');

module.exports = {
    get,
    getById,
    insert
};

function get(){
    return db('renters');
};

function getById(id) {
    return db('renters')
      .where({ id })
      .first();
};

function insert(body) {
    return db('renters')
      .insert(body)
      .then(ids => {
        return getById(ids[0]);
      });
  }