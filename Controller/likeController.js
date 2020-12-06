const fs = require('fs');
const async = require('async');


function likeController(req, res, next){

    let userArray = JSON.parse(fs.readFileSync('../Storage/user1.json'))
    
    console.log(userArray[0].Liked)

    for(var i=0; i<userArray.length; i++){
        if(req.body.currentUserUsername == userArray[i].Username){
            (userArray[i].Liked).push(req.body.Username)
            fs.writeFile('../Storage/user1.json', JSON.stringify(userArray, null, 4), (err) => {
                if (err) throw err;
            })
            res.json(userArray[i])


/*
            let checking = true;

            let checking2 = false;
        
            let checking3 = false;
        
        
            for (var j = 0; j < req.body.Liked.length; j++) {
                for (var k = 0; k < userArray.length; k++) {
                    if (req.body.Liked[i] == userArray[k].Username) {
                        checking2 = true
                        //console.log(checking2)
                    }
                }
            }

            for(var l=0; l<(userArray[i].Liked).length; l++){
                if(req.body.Username == userArray[i].Liked[l]) {
                    
                    checking3 = true
                    //console.log(checking3)
                }
            }
            if(checking2 == true && checking3 == true){
                checking=false
                console.log(userArray[i])
                res.json(userArray[i])
            } else if(checking == true) {
                res.json(userArray[i] && "No match")
            }*/
        }
    }
}

module.exports = likeController;