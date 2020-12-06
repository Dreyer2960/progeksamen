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


server.post("/likeUser", (req, res, next) => {

    let likeArray = JSON.parse(fs.readFileSync('../Storage/likeUserArray.json'))
    

    likeArray.push(req.body.Username)

    fs.writeFile('../Storage/likeUserArray.json', JSON.stringify(likeArray, null, 4), (err) => {
        if (err) throw err;
    })

    let userArray = JSON.parse(fs.readFileSync('../Storage/user1.json'));



    let checking = true;

    let checking2 = false;

    let checking3 = false;


    for (var i = 0; i < req.body.Liked.length; i++) {
        for (var j = 0; j < userArray.length; j++) {
            if (req.body.Liked[i] == userArray[j].Username) {
                checking2 = true
            }
        }
    }

    for(var i=0; i<likeArray.length; i++){
        if(req.body.Username == likeArray[i]) {
            
            checking3 = true
        }
    } if(checking2 == true && checking3 == true){
        res.json(likeArray)
    } else if(checking == true) {
        res.json("Fail")
    }
    }
)