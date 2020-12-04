const username = document.getElementById('username');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const dot = document.getElementById('dot');
const gender = document.getElementById('gender');



let profileID = JSON.parse(localStorage.getItem("userID"))


window.onload = function showProfile(){
    username.innerHTML = profileID[0].Username;
    fName.innerHTML = profileID[0].Firstname;
    lName.innerHTML = profileID[0].Lastname;
    email.innerHTML = profileID[0].Email;
    dot.innerHTML = profileID[0].Dob;
}
    

function deleteProfile(){

    let deleteUser = {
        deleteUsername: profileID[0].Username
    }
    console.log(deleteUser)

    deleting(deleteUser)
    
}


function deleting(deleteUser){
    console.log(deleteUser)
       fetch('http://localhost:3000/deleteprofile', {
           
     method: 'DELETE', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(deleteUser),
   }).then(res => res.json())
   .then(data => {  
    console.log(data)
   })
   .catch((error) => {
     console.error('Error:', error);
   })}
