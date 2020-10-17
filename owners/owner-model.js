const db = require('../database/db.config');

module.exports = {
    get,
    getById,
    insert
};

function get(){
    return db('users as u')
        .join('roles as r', 'r.id', 'u.role_id' )
        .where('r.role_name','owner')
        .select('u.username as username', 'u.phone_number', 'u.city', 'r.role_name')
};

function getById(id) {
    return db('users as u')
        .join('roles as r', 'r.id', 'u.role_id' )
        .where('r.role_name','owner')
        .where('u.id', id)
        .select('u.username as username', 'u.phone_number', 'u.city', 'r.role_name')
};

function insert(body) {
    return db('owners')
      .insert(body)
      .then(ids => {
        return getById(ids[0]);
      });
}