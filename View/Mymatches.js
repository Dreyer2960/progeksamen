
let otherUsers = [Oscar, Mike, Christian, Anna, Kristine];

window.onload = function loadFirst(){
    let loggedinUser = {
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

        
       })
       .catch((error) => {
         console.error('Error:', error);
       })
       }
