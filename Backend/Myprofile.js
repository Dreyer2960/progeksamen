function getFirstname(){
    let getStorage = localStorage.getItem("Firstname");
    let getFirstname = JSON.parse(getStorage);
    document.getElementById("fName").innerHTML = getFirstname;
}

window.onload = getFirstname;