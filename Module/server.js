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

server.post("/profile", (req, res) => {
    let storedProfile = JSON.parse(fs.readFileSync('../Storage/user1.json'));
    console.log("Profile!")
    console.log(req.body);
    res.json(storedProfile);

    /*for(var i=0; i<storedProfile.length; i++){
        if(req.body){

        }
    }*/
})

server.delete("/deleteprofile", (req, res) => {
    let deletedProfile = JSON.parse(fs.readFileSync('../Storage/user1.json'));

    for(var i=0; i<deletedProfile.length; i++){
        if(req.body.deleteUsername == deletedProfile[i].Username){
            console.log("hej igen")
            res.json("Wauw")
        } else {
            console.log("failure")
            res.json("Nothing to delete")
        } 
    } 
})