/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('personnel').del()
  .then(function () {
    return knex('branch').del();
  })
    .then(function () {
      return knex('branch_name').insert([
        {id: 1, branch_name: 'USMC'},
        {id: 2, branch_name: 'Army'},
        {id: 3, branch_name: 'Navy'},
        {id: 4, branch_name: 'Air Force'},
        {id: 5, branch_name: 'Space Force'}
      ]);
    });
};

