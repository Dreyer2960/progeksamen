
function saveUser(user){
    console.log(user);
       fetch('http://localhost:3000/user', {
     method: 'GET', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
   }).then(res => res.json())
   .then(data => {  
       location.href = "../View/Homepage.html"
     
   })
   .catch((error) => {
     console.error('Error:', error);
   })
   }
