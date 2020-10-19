const db = require('../database/db.config');

module.exports = {
    remove,
    update,
    getItem,
    getById
}

function remove(id){
    return db('rental_items')
        .where('id',id)
        .del();
};

function update(id,changes){
    return db('rental_items')
        .where({id})
        .update(changes)
};

function getItem(){
    return db('rental_items')
};

function getById(id){
    return db('rental_items')
        .where({id})
        .first()
}