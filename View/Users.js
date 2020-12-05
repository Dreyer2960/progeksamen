class  User{
    constructor(firstName, lastName, age, gender){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
    }
}


let Oscar = new User("Oscar", "Pedersen", 20, "Male");
let Mike = new User ("Mike", "Jensen", 21, "Male");
let Christian = new User("Christian", "Bredgaard", 20, "Male");
let Anna = new User("Anna", "Nielsen", 22, "Female");
let Kristine = new User("Kristine", "Andersen", 21, "Female");


let otherUsers = [Oscar, Mike, Christian, Anna, Kristine];

const firstnameID = document.getElementById("firstnameID");
const lastnameID = document.getElementById("lastnameID");
const ageID = document.getElementById("ageID");
const genderID = document.getElementById("genderID");



window.onload = 
firstnameID.innerHTML = otherUsers[0].firstName;
lastnameID.innerHTML = otherUsers[0].lastName;
ageID.innerHTML = otherUsers[0].age;
genderID.innerHTML = otherUsers[0].gender;


let i=1

function goNext(){
    
    if(i>=otherUsers.length){
        console.log(otherUsers[i])
        alert("Det er ikke flere at matche med. Tryk ok for at vende tilbage til forsiden.")
        location.href="../View/Homepage.html"
        
    } else if (i<otherUsers.length){
        console.log(otherUsers[i])
        showUser(i);
        return i++
    }
}


function showUser(){
    //console.log(otherUsers[i])
    firstnameID.innerHTML = otherUsers[i].firstName
    lastnameID.innerHTML = otherUsers[i].lastName
    ageID.innerHTML = otherUsers[i].age
    genderID.innerHTML = otherUsers[i].gender
}
