
const db = require('../database/db.config');

module.exports = {
    get,
    getById,
};

function get(){
    return db('users as u')
        .join('roles as r', 'r.id', 'u.role_id' )
        .where('r.role_name','renter')
        .select('u.username as username', 'u.phone_number', 'u.city', 'r.role_name')
};

function getById(id) {
    return db('users as u')
        .join('roles as r', 'r.id', 'u.role_id' )
        .where('r.role_name','renter')
        .where('u.id', id)
        .select('u.id','u.username as username', 'u.phone_number', 'u.city', 'r.role_name', 'u.created_at')
};



