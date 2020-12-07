
const table = document.getElementById("tableID");

let profileID = JSON.parse(localStorage.getItem("userID"))

let otherUsers = JSON.parse(localStorage.getItem("matchName"))



window.onload = function loadFirst(){

  for(let i=0; i < otherUsers.length; i++){

    

  var table_row  = document.createElement('tr'); 
  table_row.innerText = "You've mathed with " + otherUsers[i].firstName + "!";
  table.appendChild(table_row);
  
  var deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Match";
  deleteButton.id = "buttonID"


  table.appendChild(deleteButton);

  var space = document.createElement('br');
  table.appendChild(space);
  }
}
  

    const buttonID = document.getElementsById("buttonID")

    console.log(buttonID)

    buttonID.addEventListener("click", function deleteMatch() {

    let matchID = {
      otherUsername: otherUsers[i].userName,
      profileUsername: profileID.Username
  }

  fetch('http://localhost:3000/deleteMatch', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(matchID),
    }).then(res => res.json())
    .then(data => {  
         console.log(data);
 
 })
    .catch((error) => {
      console.error('Error:', error);
    })
});
