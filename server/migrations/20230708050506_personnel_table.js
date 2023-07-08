/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('personnel', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('clearance').defaultTo(null);
        table.boolean('has_skill_identifier').notNullable();
        table.string('arrived_on_station').notNullable();
        table.string('mos').defaultTo(null);
        table.boolean('is_civilian').notNullable();
        table.string('rank').defaultTo(null);
        table.string('email').defaultTo(null);
        table.string('latitude');
        table.string('longitude');
        table.string('mgrs').defaultTo(null);
        table.integer('branch_id').unsigned().notNullable();
        table.foreign('branch_id').references('branch.id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return (
        knex.schema.dropTableIfExists('personnel')
    )
};
