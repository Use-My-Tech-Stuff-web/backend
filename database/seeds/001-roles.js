
exports.seed = function(knex) {
  const roles = [
    {
      role_name:'admin'
    },
    {
      role_name:'owner'
    }, 
    {
      role_name:'renter'
    },
  ]
  return knex('roles').insert(roles);
};