/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  const unitArray = [
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
  // Deletes ALL existing entries
  const units = unitArray.map((unit, i) => ({ id: i + 1, unit: unit.replace(/\s/g, '_').toLowerCase() }));
  await knex.schema.raw('TRUNCATE unit CASCADE')
  await knex('unit').del()
  await knex('unit').insert(units);
  module.exports = unitArray;
};