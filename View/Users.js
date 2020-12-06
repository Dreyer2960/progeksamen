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

let loggedinID = JSON.parse(localStorage.getItem("userID"))



let Oscar = new User("Oscar", "Pedersen", 20, "Male", "SQLguy123", [loggedinID.Username, "Mike", "Christian"]);
let Mike = new User ("Mike", "Jensen", 21, "Male", "Magic22", []);
let Christian = new User("Christian", "Bredgaard", 20, "Male", "Breadguard44", []);
let Anna = new User("Anna", "Nielsen", 22, "Female", "Lorem77", []);
let Kristine = new User("Kristine", "Andersen", 21, "Female", "Ipsum88", []);


let otherUsers = [Oscar, Mike, Christian, Anna, Kristine];

const firstnameID = document.getElementById("firstnameID");
const lastnameID = document.getElementById("lastnameID");
const ageID = document.getElementById("ageID");
const genderID = document.getElementById("genderID");

let i=0;

window.onload = function loadFirst(){
           fetch('http://localhost:3000/likeUser'
       ).then(res => res.json())
       .then(data => {  
        console.log(data)

        let alreadyLiked = data;

        let likedAlready2 = false;

        for (var k = 0; k < alreadyLiked.length; k++) {
            if (alreadyLiked[k] == otherUsers[i].userName) {
                likedAlready2 = true;
                goNext(alreadyLiked);
        }
    } if(likedAlready2 == false){
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


function goNext(alreadyLiked){
    i++
    let likedAlready = false;
    console.log(alreadyLiked)
    console.log(otherUsers[i].userName)

    for (var j = 0; j < alreadyLiked.length; j++) {
            if (alreadyLiked[j] == otherUsers[i].userName) {
                likedAlready = true;
                //i++
                goNext(alreadyLiked);
        }

    } if(likedAlready==false){

    //i++
    if(i>=otherUsers.length){
        console.log(otherUsers[i])
        alert("Det er ikke flere at matche med. Tryk ok for at vende tilbage til forsiden.")
        location.href="../View/Homepage.html"
        
    } else if (i<otherUsers.length){
        console.log(otherUsers[i])
        showUser(i);
    }
}
}



function showUser(){

    
    firstnameID.innerHTML = otherUsers[i].firstName
    lastnameID.innerHTML = otherUsers[i].lastName
    ageID.innerHTML = otherUsers[i].age
    genderID.innerHTML = otherUsers[i].gender
}



function likeUser(){
    let likedUser = {
        Username: otherUsers[i].userName,
        Liked: otherUsers[i].liked
    }
    console.log(likedUser);
       fetch('http://localhost:3000/likeUser', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(likedUser),
   }).then(res => res.json())
   .then(data => {  

     if(data != "Fail"){
         alert("It's a match! Go to 'My matches' to see more.")
        
        let alreadyLiked = data;

         goNext(alreadyLiked);
     } else {
         goNext();
     }
   })
   .catch((error) => {
     console.error('Error:', error);
   })
   }
