/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const personnelData = require('./personnel.json');

exports.seed = async function (knex) {
  await knex('personnel').del();
  await knex('personnel').insert(personnelData)
};
