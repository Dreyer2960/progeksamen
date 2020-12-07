const express = require("express");
const cors = require("cors");
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const async = require('async');


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


server.post("/likedUsers", (req, res, next) => {
    let opinionArray = JSON.parse(fs.readFileSync('../Storage/user1.json'))

    for(var i=0; i<opinionArray.length; i++){
      if(req.body.loggedinUsername == opinionArray[i].Username){
        res.json(opinionArray[i])
      }
    }
})

const likeController = require('../Controller/likeController')

server.post("/likeUser", likeController)


server.post("/dislikeUser", (req, res, next) => {

  let userArray = JSON.parse(fs.readFileSync('../Storage/user1.json'))
    
  console.log(userArray[0].Disliked)

  for(var i=0; i<userArray.length; i++){
      if(req.body.currentUserUsername == userArray[i].Username){
          (userArray[i].Disliked).push(req.body.Username)
          fs.writeFile('../Storage/user1.json', JSON.stringify(userArray, null, 4), (err) => {
              if (err) throw err;
          })
          res.json(userArray[i])
      }
  }
})


server.post("/myMatches", (req, res, next) => {
  let opinionArray = JSON.parse(fs.readFileSync('../Storage/user1.json'))

    for(var i=0; i<opinionArray.length; i++){
      if(req.body.loggedinUsername == opinionArray[i].Username){
        res.json(opinionArray[i])
      }
    }
});


server.post("/deleteMatch", (req, res, next) => {
  let userArray = JSON.parse(fs.readFileSync('../Storage/user1.json'))

  for(var i=0; i<userArray.length; i++){
    if(req.body.profileUsername == userArray[i].Username){
        console.log("User found")
        
      for(var j=0; j<(userArray[i].Liked).length; j++){
        if(req.body.otherUsername == userArray[i].Liked[j]){
          let seeRemoved = userArray.splice((userArray[i].Liked[j]), 1)
          console.log(seeRemoved)
        }
      }

        /*

        fs.writeFile('../Storage/user1.json', JSON.stringify(deletedProfile, null, 4), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });

        res.json("Wauw")
        checking = false
    } 
} if (checking == true){
    console.log("failure")
    res.json("Nothing to delete")
}*/

}}})



/*server.get('/dislikeUser', (req, res, next) => {
    let dislikeArray1 = JSON.parse(fs.readFileSync('../Storage/dislikeUserArray.json'))

    res.json(dislikeArray1)
})*/