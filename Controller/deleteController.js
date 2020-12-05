const fs = require('fs');

function deleteController (req, res, next) {
    let deletedProfile = JSON.parse(fs.readFileSync('../Storage/user1.json'));

    let checking = true

    for(var i=0; i<deletedProfile.length; i++){
        if(req.body.deleteUsername == deletedProfile[i].Username){
            console.log("delete this")
            
            deletedProfile.splice([i], 1)
            console.log(deletedProfile)

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
    }
}

module.exports = deleteController;