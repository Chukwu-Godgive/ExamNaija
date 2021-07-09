 // This validates Sign Up page
function signUpValidator() {
    let name = document.getElementById("getFullName").value;
    let email = document.getElementById("getEmail").value;
    let password = document.getElementById("getPassword").value;
    let confirmPassword = document.getElementById("getConfirmPassword").value;

    let storedEmail = localStorage.getItem("storedEmail")
    let storedPassword = localStorage.getItem("storedPassword")

    if(name=="") {
        alert("Please enter your name");
    }
    else if(email=="") {
        alert("Please enter your email");
    }
    else if(email==storedEmail) {
        alert("Email already exist!");
    }
    else if(password=="") {
        alert("Please enter your password");
    }
    else if(password.length < 6) {
        alert("Password entered is below 6");
    }
    else if(confirmPassword=="") {
        alert("Please enter confirm password");
    }
    else if(confirmPassword != password) {
        alert("Password did not Match");
    }
    else {
        localStorage.setItem("storedEmail", email);
        localStorage.setItem("storedPassword", password);

        location.href = "./dashboard.html"
    }
}

 // This validates the login page
function loginValidator() {
    let email = document.getElementById("getEmail").value;
    let password = document.getElementById("getPassword").value;

    let storedEmailLogin = localStorage.getItem("storedEmail")
    let storedPasswordLogin = localStorage.getItem("storedPassword")

    if(email=="") {
        alert("Please enter your password");
    }
    else if(password=="") {
        alert("Please enter your password")
    }
    else if(email != storedEmailLogin && password != storedPasswordLogin) {
        alert("Incorrect email or password");
    }
    else {
        location.href = "./dashboard.html"
    }
}