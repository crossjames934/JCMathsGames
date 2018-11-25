const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');
const hash = require('object-hash');

const cors = require('cors');

const mongoose = require('mongoose');

console.log("Short ID: " + shortid.generate());

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});