const form  = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const dot = document.getElementById('dot')
const gender = document.getElementById('gender');
const username = document.getElementById('username');




let subValidated = true;

form.addEventListener('submit', (e) => {
    let user = {
        Email: email.value,
        Username: username.value,
        Password: password.value,
        Firstname: firstname.value,
        Lastname: lastname.value,
        Dob: dot.value
    }

    e.preventDefault();
    

    checkInputs();


    if(subValidated==true){
    saveUser(user);
    } else {
        return false
    }

    
/*
    if(subValidated==true){
        location.href = "../View/Homepage.html";
    } else {
        return false;   
}*/
    
});
   
    function checkInputs() {
        const emailValue = email.value
        const passwordValue = password.value
        const firstnameValue = firstname.value
        const lastnameValue = lastname.value
        const dotValue = dot.value
        const usernameValue = username.value
        

        subValidated = true;

        if (emailValue === '') {
            setErrorFor(email, 'E-mail cannot be blank');
        } else {
            setSuccesFor(email);
        }

        if (usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else {
            setSuccesFor(username);
        }
       /* if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');}
        } else if (passwordValue.length >= 15) {
            setErrorFor(password, 'Password cannot be longer than 14 characters')
        } else if (passwordValue.length <= 6) {
            setErrorFor(password, 'Password cannot be shorter than 6 characters')
        } else {
            setSuccesFor(password);
        } 
*/
        if(password.value != confirmPassword.value){
            setErrorFor(confirmPassword, 'Passwords does not match')
        } else {
            setSuccesFor(confirmPassword)
        }

        if (firstnameValue === '') {
            setErrorFor(firstname, 'First name cannot be blank');
        } else {
            setSuccesFor(firstname);
        }

        if (lastnameValue === '') {
            setErrorFor(lastname, 'Last name cannot be blank');
        } else {
            setSuccesFor(lastname);
        }

        if (dotValue === '') {
            setErrorFor(dot, 'Date of birth cannot be blank');
        } else {
            setSuccesFor(dot);
        }


}

password.addEventListener("keyup", passValidate) 
function passValidate() {
    let passwordValue = password.value;

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length >= 15) {
        setErrorFor(password, 'Password cannot be longer than 14 characters')
    } else if (passwordValue.length <= 6) {
        setErrorFor(password, 'Password cannot be shorter than 7 characters')
    } else {
        setSuccesFor(password);
        subValidated = true;
    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

    subValidated = false;
}


function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';

};


function saveUser(user){
     console.log(user);
        fetch('http://localhost:3000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(res => res.json())
    .then(data => {  
        if(data != "Fail"){
            location.href = "../View/Homepage.html";
            alert("Your account was created. Log in to start matching!")
        } else {
            alert ("Username already exists.")
            return false
        }
      
    })
    .catch((error) => {
      console.error('Error:', error);
    })
    }

