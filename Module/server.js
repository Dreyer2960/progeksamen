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


const deleteController = require('../Controller/deleteController')

server.delete("/deleteprofile", deleteController)


server.get("/likeUser", (req, res, next) => {
    let likeArray1 = JSON.parse(fs.readFileSync('../Storage/likeUserArray.json'))

    res.json(likeArray1)

})

const likeController = require('../Controller/likeController')

server.post("/likeUser", likeController)


server.post("/dislikeUser", (req, res, next) => {
    let dislikeArray = JSON.parse(fs.readFileSync('../Storage/dislikeUserArray.json'))
    
    dislikeArray.push(req.body.Username)

    fs.writeFile('../Storage/dislikeUserArray.json', JSON.stringify(dislikeArray, null, 4), (err) => {
        if (err) throw err;
    })

    res.json(dislikeArray)

})