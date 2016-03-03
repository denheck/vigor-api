const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send("Welcome to the Vigor API"));


app.listen(port, () => console.log(`Listening on port: ${port}...`));