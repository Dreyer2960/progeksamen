function getStorage(){
    let getStorage1 = localStorage.getItem("Firstname");
    let getFirstname = JSON.parse(getStorage1);
    document.getElementById("fName").innerHTML = getFirstname;

    let getStorage2 = localStorage.getItem("Lastname");
    let getLastname = JSON.parse(getStorage2);
    document.getElementById("lName").innerHTML = getLastname;

    let getStorage3 = localStorage.getItem("Email");
    let getEmail = JSON.parse(getStorage3);
    document.getElementById("e-mail").innerHTML = getEmail;

    let getStorage4 = localStorage.getItem("Dateofbirth");
    let getDot = JSON.parse(getStorage4);
    document.getElementById("dot").innerHTML = getDot;

    let getStorage5 = localStorage.getItem("Gender");
    let getGender = JSON.parse(getStorage5);
    document.getElementById("gender").innerHTML = getGender;
}

window.onload = getStorage;