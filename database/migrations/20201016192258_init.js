
exports.up = function(knex) {
    return knex.schema
        .createTable('owners', owner => {
            owner.increments();
            owner.string('username',255).notNullable().unique();
            owner.string('password', 255);
            owner.integer('phone_Number', 16)
            owner.timestamp('created_at').defaultTo(knex.fn.now());
            owner.string('city',150)
        })
        .createTable('rental_items', item => {
            item.increments();
            item.string('picture', 255)
            item.text('description',1000).notNullable()
            item.timestamp('created_at').defaultTo(knex.fn.now());
            item.decimal('price', 8, 2).notNullable();
            item.integer('owner_id').unsigned().references('id').inTable('owner')
        })
        .createTable('renters', renter => {
            renter.increments();
            renter.string('username',255).notNullable().unique();
            renter.string('password', 255);
            renter.integer('phone_Number', 16);
            renter.timestamp('created_at').defaultTo(knex.fn.now());
            renter.string('city',150);
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('renters')
        .dropTableIfExists('rental_items')
        .dropTableIfExists('owners')
};
