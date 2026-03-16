function logout(){
    alert("Logged out successfully");
    window.location.href = "sign _in.html";
}
function searchRecipe(){

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

}