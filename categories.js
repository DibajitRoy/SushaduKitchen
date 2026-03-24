function logout(){
    alert("Logged out successfully");
    window.location.href = "sign _in.html";
}

function goCategory(name){
    window.location.href = "recipes.html?category=" + name;
}