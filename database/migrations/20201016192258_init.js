
exports.up = function(knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments();
            user.string('username',255).notNullable().unique();
            user.string('password', 255);
            user.integer('phone_number', 16)
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
        .createTable('roles', role => {
            role.increments();
            role.string('role_name',255).notNullable().unique();
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('rental_items')
    .dropTableIfExists('roles')
};
