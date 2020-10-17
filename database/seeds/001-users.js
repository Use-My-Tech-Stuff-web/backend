
exports.seed = function(knex) {
  const users = [
    {
      username: "owner1",
      phone_Number: "5848793156",
      city:'Lexington',
      role_id: 2
    },
    {
      username: "owner2",
      phone_Number: "5848793156",
      city:'Lexington',
      role_id: 2
    },
    {
      username: "owner3",
      phone_Number: "5848793156",
      city:'Los Angeles',
      role_id: 3
    },
    {
      username: "owner4",
      phone_Number: "5848793156",
      city:'Los Angeles',
      role_id: 3
    },
    {
      username: "owner5",
      phone_Number: "5848793156",
      city:'Los Angeles',
      role_id: 3
    },
    {
      username: "owner6",
      phone_Number: "5848793156",
      city:'Lexington',
      role_id: 2
    }
  ]
  return knex('users').insert(users);
};
