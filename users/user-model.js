const db = require('../database/db.config');

module.exports = {
    get,
    getById
}

function get(){
    return db('users')
}

function getById(id){
    return db('users')
    .where({id})
    .first()
}