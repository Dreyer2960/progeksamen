const username = document.getElementById('username');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const dot = document.getElementById('dot');
const gender = document.getElementById('gender');



let profileID = JSON.parse(localStorage.getItem("userID"))



    

function deleteProfile(){

    let deleteUser = {
        deleteUsername: profileID.Username
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
       if(data="Wauw"){
           localStorage.clear();
           location.href='../View/Front1.html'
           alert("You account was deleted.")
       }
    console.log(data)
   })
   .catch((error) => {
     console.error('Error:', error);
   })}


   window.onload = function showProfile(){
    username.innerHTML = profileID.Username;
    fName.innerHTML = profileID.Firstname;
    lName.innerHTML = profileID.Lastname;
    email.innerHTML = profileID.Email;
    dot.innerHTML = profileID.Dob;
}