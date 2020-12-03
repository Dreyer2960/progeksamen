window.onload = function loadCorrect(){
    let localKey = localStorage.getItem("loggedInUser")
    if(localKey!="loggedIn"){
        location.href = "../View/Front1.html";
    } else {
        console.log("It do be working tho")
    }
}


function logout(){
    localStorage.clear();
    location.href = "../View/Front1.html";
}