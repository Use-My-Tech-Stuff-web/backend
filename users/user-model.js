const db = require('../database/db.config');

module.exports = {
    get,
    getById,
    add,
    getBy,
    update
}

function get(){
    return db('users')
};

function getById(id){
    return db('users')
    .where({id})
    .first()
};

function getBy(filter){
    return db('users')
    .where(filter)
    .first()
}

function add(body){
    const type = body.role
    if(type === 'owner'){
        const newBody1 = {
            username: body.username,
            password:body.password,
            role_id: 2
        }
        return db('users')
            .insert(newBody1,'id')
    } else if(type === 'renter'){
        const newBody = {
            username: body.username,
            password:body.password,
            role_id: 3
        }
        return db('users')
            .insert(newBody,'id')
         };
};

function update(body, id){
    return db('users as u')
        .where({id})
        .update(body)
        .then(() => {
            return getById(id)
        });
};