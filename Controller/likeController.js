const fs = require('fs');

function likeController(req, res, next){

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

module.exports = likeController;