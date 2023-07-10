/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex.schema.raw('TRUNCATE installation CASCADE')
    await knex('installation').del()
    await knex('installation').insert([
      {id: 1, name: 'JBLM'},
      {id: 2, name: 'JBSH'},
      {id: 3, name: 'fort_liberty'},
      {id: 4, name: 'camp_pendleton'},
      {id: 5, name: 'camp_lejeune'},
    ]);
  }; 