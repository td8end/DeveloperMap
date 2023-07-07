exports.up = function (knex) {
    return knex.schema
        .createTable('branch', table => {
            table.increments('id').primary();
            table.string('responsibility').notNullable();
        })
        .createTable('personnel', table => {
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
        .createTable('unit', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.integer('personnel_id').unsigned().notNullable();
            table.foreign('personnel_id').references('personnel.id');
        })
        .createTable('installation', table => {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.integer('unit_id').unsigned().notNullable();
            table.foreign('unit_id').references('unit.id');
            table.integer('personnel_id').unsigned().notNullable();
            table.foreign('personnel_id').references('personnel.id');
        })

};

exports.down = function (knex) {
    return (
        knex.schema.alterTable('personnel', table => {
            table.dropForeign('branch_id')
        })
            .then(() => {
                knex.schema.dropTableIfExists('branch')
            })
            .then(() => {
                knex.schema.alterTable('unit', table => {
                    table.dropForeign('personnel_id')
                })
            })
            .then(() => {
                knex.schema.alterTable('installation', table => {
                    table.dropForeign('personnel_id')
                })
            })
            .then(() => {
                knex.schema.alterTable('installation', table => {
                    table.dropForeign('unit_id')
                })
            })
            .then(() => {
                knex.schema.dropTableIfExists('personnel')
            })
            .then(() => {
                knex.schema.dropTableIfExists('unit')
            })
            .then(() => {
                knex.schema.dropTableIfExists('installation')
            })
    )
};