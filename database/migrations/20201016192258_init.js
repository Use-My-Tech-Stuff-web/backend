
exports.up = function(knex) {
    return knex.schema
        .createTable('roles', role => {
            role.increments();
            role.string('role_name',255).unique();
        })
        .createTable('users', user => {
            user.increments();
            user.string('username',255).notNullable().unique();
            user.string('password', 255);
            user.bigInteger('phone_number', 26)
            user.timestamp('created_at').defaultTo(knex.fn.now());
            user.string('city',150)
            user.integer('role_id').unsigned().references('id').inTable('roles').onUpdate('CASCADE').onDelete('RESTRICT');
        })
        .createTable('rental_items', item => {
            item.increments();
            item.string('picture', 255)
            item.text('description',1000).notNullable()
            item.timestamp('created_at').defaultTo(knex.fn.now());
            item.decimal('price', 8, 2).notNullable();
            item.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('RESTRICT');
        })
        
};

exports.down = function(knex) { 
    return knex.schema
    .dropTableIfExists('rental_items')
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
};
