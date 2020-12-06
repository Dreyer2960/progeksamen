
const table = document.getElementById("tableID");

let profileID = JSON.parse(localStorage.getItem("userID"))


window.onload = function loadFirst(){

  let matchedUsers = JSON.parse(localStorage.getItem("matchName"))

  console.log(matchedUsers.length)

  for(let i=0; i < matchedUsers.length; i++){

  var table_row  = document.createElement('tr'); 
  table_row.innerText = matchedUsers[i];
  table.appendChild(table_row);
  
  var deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Match";
  deleteButton.onclick = deleteMatch();
  table.appendChild(deleteButton);

  var space = document.createElement('br');
  table.appendChild(space);
  }
}
  

function deleteMatch(){

}


  /*let loggedinUser = {
        loggedinUsername: profileID.Username
    }
           fetch('http://localhost:3000/myMatches', {
           method: 'POST', // or 'PUT'
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(loggedinUser),
         }).then(res => res.json())
       .then(data => {  
        console.log(data)
        let userMatches = data;

        for(var i=0; i<(userMatches.Matches).length; i++){
          var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode("You've matched with " + userMatches.Matches[i] + "!"); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
      
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv); 
        }

        /*(userMatches.Matches).forEach(function addElement (){
        
        var newDiv = document.createElement("div"); 
        // and give it some content 
        var newContent = document.createTextNode(userMatches.Matches); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
      
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("div1"); 
        document.body.insertBefore(newDiv, currentDiv); 
        })
       })
       .catch((error) => {
         console.error('Error:', error);
       })*/

