/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const personnelData = require('./personnel.json');

exports.seed = function(knex) {
  return knex('personnel').del()
    .then(function () {
      return knex('personnel').insert(personnelData);
    });
};
