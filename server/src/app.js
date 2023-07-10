const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req, res) => {
    res.send('Application up and running')
})

app.get('/branch', (req, res) => {
    knex('branch')
        .select('*')
        .then(result => {
            var branches = result.map(branch => branch)
            res.json(branches);
        })
})

app.get('/personnel', (req, res) => {
    knex('personnel')
        .select('*')
        .then(result => {
            var personnelArray = result.map(prsnl => prsnl)
            res.json(personnelArray);
        })
})


app.listen(port, () => {
    console.log(`Server running at ${port}.  Let's see some queries!`)
})