const express = require('express');
var cors = require('cors')
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);
const  cookieParser = require('cookie-parser');
app.use(cookieParser());



app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Application up and running!')
})

app.get('/branch', cors(), (req, res) => {
    knex('branch')
        .select('*')
        .then(result => {
            var branches = result.map(branch => branch)
            res.json(branches);
        })
})

app.get('/unit', cors(), (req, res) => {
    knex('unit')
        .select('*')
        .then(result => {
            var unitArray = result.map(unit => unit)
            res.json(unitArray);
        })
})

app.get('/installation', cors(), (req, res) => {
    knex('installation')
        .select('*')
        .then(result => {
            var installationArray = result.map(installation => installation)
            res.json(installationArray);
        })
})

app.get('/personnel', cors(), (req, res) => {
    knex('personnel')
        .select('*')
        .then(result => {
            var personnelArray = result.map(prsnl => prsnl)
            res.json(personnelArray);
        })
})

app.post('/test', async (req, res) => {
    let userToAdd = req.body.data;
    
    console.log("Adding a new user:", userToAdd.name)

    // if(req.cookies.idCookie) {
    //     res.cookie('idCookie', [...req.cookies.idCookie, userToAdd.id.toString()]);
    // } else {
    //     res.cookie('idCookie', [userToAdd.id.toString()]);
    // }

    //pushing new user to our personnelArray with the correct keys
    userToAdd = {
        'name': userToAdd.name,
        'clearance': userToAdd.clearance,
        'has_skill_identifier': userToAdd.has_skill_identifier,
        'arrived_on_station': userToAdd.arrived_on_station,
        'is_civilian': userToAdd.is_civilian,
        'mos': userToAdd.mos,
        'rank': userToAdd.rank,
        'email': userToAdd.email,
        'geocode': userToAdd.geocode,
        'mgrs': userToAdd.mgrs,
        'branch_id': userToAdd.branch_id,
        'unit_id': userToAdd.unit_id,
        'installation_id': userToAdd.installation_id,
        'photo': userToAdd.photo
    }

    // personnelArray.push((usersToPush));
    try {
        await knex('personnel').insert(userToAdd);
        res.status(200).send('User added successfully');
    } catch (error) {
        res.status(500).send('Error inserting user to the database');
        console.error(error);
    }
    // //Checking for malformed request or bad status code
    // if(Object.keys(usersToAdd).toString() != [ 'id', 'username', 'userGeocode', 'userEmail', 'userRank' ].toString()){
    //     res.send(`Request body content malformed, expected a complete book JSON object`);
    //     throw new Error(`Request body content malformed, expected a complete book JSON object`);
    // }

    // if(res.statusCode != 200) {
    //     throw new Error(`Server response not good, server code:${res.statusCode}`)
    // }

})


app.listen(port, () => {
    console.log(`Server running at ${port}.  Let's see some queries!`)
})