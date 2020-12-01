const form  = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const dot = document.getElementById('dot')
const cpr = document.getElementById('cpr');

let subValidated = true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    checkInputs();

    saveName();

    if(subValidated==true){
        location.href = "../Frontend/Homepage.html";
    } else {
        return false;
    };

});
   
    function checkInputs() {
        const emailValue = email.value
        const passwordValue = password.value
        const firstnameValue = firstname.value
        const lastnameValue = lastname.value
        const dotValue = dot.value
        const cprValue = cpr.value

        subValidated = true;

        if (emailValue === '') {
            setErrorFor(email, 'E-mail cannot be blank');
        } else {
            setSuccesFor(email);
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

        if (cprValue === '') {
            setErrorFor(cpr, 'CPR cannot be blank');
        } else {
            setSuccesFor(cpr);
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

function saveName(){
    localStorage.setItem("Firstname", JSON.stringify(firstname.value))
}


/*
document.getElementById("validateSubmit").onclick = function (e) {
    if (setSuccesFor()) {
        location.href = "../Frontend/Homepage.html";
    } else {
        checkInputs();
        e.preventDefault();
    }
}*/



    /*
    let access = []

    if (password.value.length <= 6) {
        acces.push('Password must be longer than 6 characters.')
        alert('Password invalid');
    }
    if (password.value.length >= 20) {
        access.push('Password must be less than 20 characters.')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join (',')
    }
    
})*/