
exports.seed = function(knex) {
  const renters = [
    {
      username:'user',
      phone_Number:548921564,
      city: 'lexington'
    },
    {
      username:'user1',
      phone_Number:548921564,
      city: 'Los Angeles'
    },
    {
      username:'user2',
      phone_Number:548921564,
      city: 'lexington'
    },
    {
      username:'user3',
      phone_Number:548921564,
      city: 'lexington'
    }
  ]
  return knex('renters').insert(renters);
};
