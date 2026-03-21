function logout(){
    alert("Logged out successfully");
    window.location.href = "sign _in.html";
}




function searchRecipe(){

let input = document.getElementById("searchInput").value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let title = card.querySelector("h2").innerText.toLowerCase();

if(title.includes(input)){
card.style.display = "inline-block";
}
else{
card.style.display = "none";
}

});

}

function filterRecipe(level){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.querySelector(".level").innerText;

if(text == level){
card.style.display = "inline-block";
}
else{
card.style.display = "none";
}

});

}

function showAll(){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){
card.style.display = "inline-block";
});

}