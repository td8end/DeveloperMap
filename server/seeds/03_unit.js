/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
unitArray=[ 
"1st Marine Division",
"2nd Marine Division",
"82nd Airborne Division",
"3rd Infantry Division",
"10th Mountain Division",
"101st Airborne Division",
"Naval Surface Warfare Center",
"Naval Submarine Base New London",
"509th Bomb Wing",
"60th Air Mobility Wing",
"355th Wing",
"432nd Wing",
"Space Operations Command",
"Space Delta 2",
"Space Delta 8"]
;
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex.schema.raw('TRUNCATE unit CASCADE')
    await knex('unit').del()
    const units = unitArray.map((unit, i) => ({ id: i + 1, unit: unit.replace(/\s/g, '_').toLowerCase() }));
    await knex('unit').insert(units);
  }; 
module.exports = unitArray;