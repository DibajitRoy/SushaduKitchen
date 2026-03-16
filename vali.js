alert("JS connected");

function data() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;

    if (a == "" || b == "") {
        alert("Please fill in all the fields");
        return false;
    }
    else if (b.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    else {
        alert("Login Successful");
        return true;
    }
}