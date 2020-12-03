

function loginTY(){
    const inputUsername = document.getElementById('loginUsername');
    const inputPassword = document.getElementById('loginPassword');

    let loginUser = {
        loginUsername: inputUsername.value,
        loginPassword: inputPassword.value
    }


    loginInput(loginUser);

}



function loginInput(loginUser){
    console.log(loginUser);
       fetch('http://localhost:3000/login', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(loginUser),
   }).then(res => res.json())
   .then(data => {  
       if(data == "Succes"){
           console.log("login succesful")
       location.href = "../View/Homepage.html"
       } else if (data == "Fuckingshit"){
           alert("Username or Password is wrong")
       }
   //alert('Success:', data);
     
   })
   .catch((error) => {
     console.error('Error:', error);
   })
   }