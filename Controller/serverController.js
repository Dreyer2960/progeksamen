const fs = require('fs');

function signUpController(req, res, next){
    console.log(req.body)
    let dataarray = JSON.parse(fs.readFileSync('../Storage/user1.json'))
    console.log(dataarray)
    //dataarray.push(req.body)
    
    let checking = true;
    
    for(var i=0; i<dataarray.length; i++){
        if (req.body.Username == dataarray[i].Username){
            res.json("Fail")
            checking = false
        }
        } 
        if(checking == true){
        dataarray.push(req.body)
        res.json(dataarray)
        fs.writeFile('../Storage/user1.json', JSON.stringify(dataarray, null, 4), (err) => {
            if (err) throw err;
            console.log('Data written to file');
        })
} 
}

module.exports = signUpController