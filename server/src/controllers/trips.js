// import file system module
const fs = require("fs");

// setup data path
const path = './cities.json'

// set up getTrpis controller and parse data
const getTrips = ((req, res) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            throw err;
        }

        res.send(JSON.parse(data));
    })
})

module.exports = {
    getTrips
}