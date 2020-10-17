const { response } = require('express');
const db = require('../database/db.config');

module.exports = {
    get,
    getById,
    getItems,
    postItem

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
        .select('u.username as username', 'u.phone_number', 'u.city', 'r.role_name', 'u.created_at')
};

function getItems(id){
    return db('users')
        .where({id})
        .first()
        .then(user => {
            return db('rental_items')
            .where('user_id', '=', user.id)
        });
};

function postItem(body,id){
    const newBody = {...body, user_id: id}
    return db('rental_items')
        .insert(newBody)
};




