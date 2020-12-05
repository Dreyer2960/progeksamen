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



window.onload = function loadFirst(){
firstnameID.innerHTML = otherUsers[0].firstName;
lastnameID.innerHTML = otherUsers[0].lastName;
ageID.innerHTML = otherUsers[0].age;
genderID.innerHTML = otherUsers[0].gender;

}




let i=0

function goNext(){
    i++
    if(i>=otherUsers.length){
        console.log(otherUsers[i])
        alert("Det er ikke flere at matche med. Tryk ok for at vende tilbage til forsiden.")
        location.href="../View/Homepage.html"
        
    } else if (i<otherUsers.length){
        console.log(otherUsers[i])
        showUser(i);
    }
}


function showUser(){
    //console.log(otherUsers[i])
    firstnameID.innerHTML = otherUsers[i].firstName
    lastnameID.innerHTML = otherUsers[i].lastName
    ageID.innerHTML = otherUsers[i].age
    genderID.innerHTML = otherUsers[i].gender
};


function likeUser(){
    let likedUser = {
        Username: otherUsers[i].firstName,
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
     if(data == "It's a match"){
         alert("It's a match! Go to 'My matches' to see more.")
     } 
   })
   .catch((error) => {
     console.error('Error:', error);
   })
   }
