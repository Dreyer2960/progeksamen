

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
       if(data != "Login fail"){
           //console.log("login succesful")
           localStorage.clear();
        localStorage.setItem("loggedInUser", "loggedIn")
        localStorage.setItem("userID", JSON.stringify(data))
       location.href = "../View/Homepage.html"
       } if (data == "Login fail"){
           alert("Username or Password is wrong")
       }
   })
   .catch((error) => {
     console.error('Error:', error);
   })
   }