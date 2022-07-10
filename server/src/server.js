// imports
const express = require('express');
const trips_routes = require('./routes/trips.js');

// set up ports
const PORT = process.env.PORT || 5000;

// run express
const app = express();

// start server
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

// json middleware
app.use(express.json());

// set up main route
app.use('/api/trips', trips_routes);