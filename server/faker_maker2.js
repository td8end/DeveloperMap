import fs from 'fs';
import { faker } from '@faker-js/faker';
let branch_id = 0;
let unit_id = 0;
//const branches = ["USMC", "Army", "Navy", "Air Force", "Space Force"];
const locations = [[40.7128, 74.0060], [34.0522, 118.2437], [41.8781, 87.6298], [29.7604, 95.3698], [39.7392, 104.9903]];
const clearances = ['Top Secret', 'Secret', 'Confidential']
const dod_units = require('./seeds/03_unit.js');
const dod_installations = require('./seeds/04_installation.js');
let installationCount = dod_installations.length
let unitCount = dod_units.length
const ranks = [
    "Private",
    "Private First Class",
    "Lance Corporal",
    "Corporal",
    "Sergeant",
    "Staff Sergeant",
    "Sergeant First Class",
    "Master Sergeant",
    "First Sergeant",
    "Sergeant Major",
    "Second Lieutenant",
    "First Lieutenant",
    "Captain",
    "Major",
    "Lieutenant Colonel",
    "Colonel",
    "Seaman Recruit",
    "Seaman Apprentice",
    "Seaman",
    "Petty Officer Third Class",
    "Petty Officer Second Class",
    "Petty Officer First Class",
    "Chief Petty Officer",
    "Senior Chief Petty Officer",
    "Master Chief Petty Officer",
    "Ensign",
    "Lieutenant Junior Grade",
    "Lieutenant",
    "Lieutenant Commander",
    "Commander",
    "Specialist",
    "Airman Basic",
    "Airman",
    "Airman First Class",
    "Senior Airman",
    "Staff Sergeant",
    "Technical Sergeant",
    "Master Sergeant",
    "First Sergeant",
    "Senior Master Sergeant",
    "First Sergeant",
    "Chief Master Sergeant",
    "Command Chief Master Sergeant"
];

let personnel = [];

for (let i = 0; i < 10000; i++) {
    unit_id = Math.floor(Math.random() * unitCount)
    installation_id = Math.floor(Math.random() * installationCount)
    branch_id = Math.floor(Math.random() * 5) + 1
    personnel.push({
        id: i + 1,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        clearance: faker.helpers.arrayElement(clearances),
        has_skill_identifier: faker.datatype.boolean(),
        arrived_on_station: faker.date.past().toISOString().split('T')[0],
        is_civilian: faker.datatype.boolean(),
        rank: faker.helpers.arrayElement(ranks),
        email: faker.internet.email(),
        geocode: `${locations[i % locations.length][0]}, ${locations[i % locations.length][1]}`,
        branch_id: ` ${branch_id}`,
        unit_id: ` ${unit_id}`,
        installation_id: ` ${installation_id}`,
        photo: faker.image.avatar()
    });
}

fs.writeFile('personnel.json', JSON.stringify(personnel, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

