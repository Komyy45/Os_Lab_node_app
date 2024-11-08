const express = require('express');

const app = express();
const PORT = 5000;
const HOST = "localhost";

app.get('/', (req, res) => {
    res.send("<h1>Eng. Nada hya eltop</h1>");
})

app.listen(PORT, () => {
    console.log("The app is up & running ya 3sl :)");
});