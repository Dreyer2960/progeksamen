class  User{
    constructor(firstName, lastName, age, gender, userName, liked){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
        this.userName=userName;
        this.liked=liked;
    }
}

let profileID = JSON.parse(localStorage.getItem("userID"))



let Oscar = new User("Oscar", "Pedersen", 20, "Male", "SQLguy123", [profileID.Username, "Mike", "Christian"]);
let Mike = new User ("Mike", "Jensen", 21, "Male", "Magic22", []);
let Christian = new User("Christian", "Bredgaard", 20, "Male", "Breadguard44", []);
let Anna = new User("Anna", "Nielsen", 22, "Female", "Lorem77", [profileID.Username, "Oscar"]);
let Kristine = new User("Kristine", "Andersen", 21, "Female", "Ipsum88", []);


let otherUsers = [Oscar, Mike, Christian, Anna, Kristine];



const firstnameID = document.getElementById("firstnameID");
const lastnameID = document.getElementById("lastnameID");
const ageID = document.getElementById("ageID");
const genderID = document.getElementById("genderID");

let i=0;



window.onload = function loadFirst(){
    let loggedinUser = {
        loggedinUsername: profileID.Username
    }
           fetch('http://localhost:3000/likedUsers', {
           method: 'POST', // or 'PUT'
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(loggedinUser),
         }).then(res => res.json())
       .then(data => {  
        console.log(data.Liked)

        let opinionSet = data;

        let opinionBeenSet = false;

        for (var k = 0; k < (opinionSet.Liked).length; k++) {
            if (opinionSet.Liked[k] == otherUsers[i].userName) {
                opinionBeenSet = true;
                goNext(opinionSet);
        }
    } 
    for (var k = 0; k < (opinionSet.Disliked).length; k++) {
        if (opinionSet.Disliked[k] == otherUsers[i].userName) {
            opinionBeenSet = true;
            goNext(opinionSet);
        }
    } 
    if(opinionBeenSet == false){
        firstnameID.innerHTML = otherUsers[i].firstName;
        lastnameID.innerHTML = otherUsers[i].lastName;
        ageID.innerHTML = otherUsers[i].age;
        genderID.innerHTML = otherUsers[i].gender;
    }
       })
       .catch((error) => {
         console.error('Error:', error);
       })
    }


function goNext(alreadyClicked){
    i++
    if(i>=otherUsers.length){
        alert("Det er ikke flere at matche med. Tryk ok for at vende tilbage til forsiden.")
        location.href="../View/Homepage.html"
    }
    console.log(i)
    let clickedAlready = false;
    //console.log(otherUsers[i].userName)

    for (var j = 0; j < (alreadyClicked.Liked).length; j++) {
            if (alreadyClicked.Liked[j] == otherUsers[i].userName) {
                clickedAlready = true;
                goNext(alreadyClicked);
        }

    } for (var j = 0; j < (alreadyClicked.Disliked).length; j++) {
        if (alreadyClicked.Disliked[j] == otherUsers[i].userName){
            clickedAlready = true;
                goNext(alreadyClicked);
        }
    }
    if(clickedAlready==false){

    if(i>=otherUsers.length){
        alert("Det er ikke flere at matche med. Tryk ok for at vende tilbage til forsiden.")
        location.href="../View/Homepage.html"
        
    } else if (i<otherUsers.length){
        showUser(i);
    }
}
}


function showUser(){
    console.log(otherUsers[i].firstName)
    firstnameID.innerHTML = otherUsers[i].firstName
    lastnameID.innerHTML = otherUsers[i].lastName
    ageID.innerHTML = otherUsers[i].age
    genderID.innerHTML = otherUsers[i].gender
}



function likeUser(){
    let likedUser = {
        Username: otherUsers[i].userName,
        Liked: otherUsers[i].liked,
        Firstname: otherUsers[i].firstName,
        currentUserUsername: profileID.Username
    }
    //console.log(likedUser.Liked)
       fetch('http://localhost:3000/likeUser', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(likedUser),
   }).then(res => res.json())
   .then(data => {  
       let alreadyClicked = data;
        console.log(otherUsers[i].userName);

        let checking = true;


    for(let j=0; j<(alreadyClicked.Matches).length; j++){
        if(alreadyClicked.Matches[j] == otherUsers[i].userName){
        alert("It's a match! Go to 'My matches' to see more.");

        let matchedName = JSON.parse(localStorage.getItem("matchName"));
        if(matchedName == null){
            matchedName = [];
        }
        matchedName.push(otherUsers[i]);
        localStorage.setItem("matchName", JSON.stringify(matchedName));

        console.log(alreadyClicked.Liked)
        checking = false;
        goNext(alreadyClicked);
        }
     } if(checking == true){
         console.log("eh")
         goNext(alreadyClicked);
    }
})
   .catch((error) => {
     console.error('Error:', error);
   })
   }


function dislikeUser(){
    let dislikedUser = {
        Username: otherUsers[i].userName,
        currentUserUsername: profileID.Username
    }
    console.log(dislikedUser);
       fetch('http://localhost:3000/dislikeUser', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(dislikedUser),
   }).then(res => res.json())
   .then(data => {  
    console.log(data)

    let alreadyLiked = data;

    goNext(alreadyLiked)

   })
   .catch((error) => {
     console.error('Error:', error);
   })
}
