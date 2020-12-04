const express = require("express");
const cors = require("cors");
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');


server.use(cors())
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));

server.use(bodyParser.json())

const signUpController = require('../Controller/serverController');
const { error } = require("console");

server.post("/user", signUpController);

const loginController = require('../Controller/loginController')

server.post("/login", loginController);