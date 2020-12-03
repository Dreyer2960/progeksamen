const express = require("express");
const cors = require("cors");
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');


server.use(cors())
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));

server.use(bodyParser.json())


server.post("/user", (req,res) => {
    console.log("hej")
    console.log(req.body)
    let dataarray = JSON.parse(fs.readFileSync('../Storage/user1.json'))
    console.log(dataarray)
    dataarray.push(req.body)
    
    
    fs.writeFile('../Storage/user1.json', JSON.stringify(dataarray, null, 4), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    
    })