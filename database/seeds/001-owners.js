
exports.seed = function(knex) {
  const owners = [
    {
      username: "owner1",
      phone_Number: "5848793156",
      city:'Lexington'
    },
    {
      username: "owner2",
      phone_Number: "5848793156",
      city:'Lexington'
    },
    {
      username: "owner3",
      phone_Number: "5848793156",
      city:'Los Angeles'
    },
    {
      username: "owner4",
      phone_Number: "5848793156",
      city:'Los Angeles'
    },
    {
      username: "owner5",
      phone_Number: "5848793156",
      city:'Los Angeles'
    },
    {
      username: "owner6",
      phone_Number: "5848793156",
      city:'Lexington'
    }
  ]
  return knex('owners').insert(owners);
};
