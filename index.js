const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const webApplication = express();

webApplication.get('/', (req, res) => {
    res.send(`<h1>Simple Node.Js Application!</h1>`)
} );

webApplication.listen(PORT, () => console.log(`The app had been deployed on PORT: ${PORT}`));
