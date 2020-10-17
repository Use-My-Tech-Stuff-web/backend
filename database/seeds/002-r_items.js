
exports.seed = function(knex) {
  const items = [
    {
      picture: 'https://images.unsplash.com/photo-1541688672027-2c8e9a90133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:'brand new',
      price: 1500,
      user_id: 1
    },
    {
      picture: 'https://images.unsplash.com/photo-1541688672027-2c8e9a90133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:'brand new',
      price: 1500,
      user_id: 1
    },
    {
      picture: 'https://images.unsplash.com/photo-1541688672027-2c8e9a90133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:'brand new',
      price: 1500,
      user_id: 2
    },
    {
      picture: 'https://images.unsplash.com/photo-1541688672027-2c8e9a90133b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description:'brand new',
      price: 1500,
      user_id: 3
    }
  ]
  return knex('rental_items').insert(items);
 
};
