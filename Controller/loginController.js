const fs = require('fs');

function loginController(req, res, next){
    //console.log('hej');
    let user = JSON.parse(fs.readFileSync('../Storage/user1.json'))
   
    for(var i=0; i<user.length; i++){
        if(req.body.loginUsername == user[i].Username && req.body.loginPassword == user[i].Password){
            //console.log("hej igen")
            res.json(user[i])
        } 
    } 
        //console.log("failure")
        res.json("Login fail")
    }  


module.exports = loginController;