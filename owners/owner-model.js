const db = require('../database/db.config');

module.exports = {
    get,
    getById,
    insert
};

function get(){
    return db('owners');
};

function getById(id) {
    return db('owners')
      .where({ id })
      .first();
};

function insert(body) {
    return db('owners')
      .insert(body)
      .then(ids => {
        return getById(ids[0]);
      });
}