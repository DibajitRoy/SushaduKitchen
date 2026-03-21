function goBack(){
    window.history.back();
}

var params = new URLSearchParams(window.location.search);
var recipeName = params.get("name");

if(recipes[recipeName]){

    var r = recipes[recipeName];

    document.getElementById("recipeTitle").innerText = r.title;
    document.getElementById("recipeImage").src = r.image;
    document.getElementById("recipeDifficulty").innerText = r.difficulty;
    document.getElementById("recipeTime").innerText = r.time;
    

    var ingList = document.getElementById("recipeIngredients");

    for(var i = 0; i < r.ingredients.length; i++){
        var li = document.createElement("li");
        li.innerText = r.ingredients[i];
        ingList.appendChild(li);
    }

    var stepList = document.getElementById("recipeSteps");

    for(var i = 0; i < r.steps.length; i++){
        var li = document.createElement("li");
        li.innerText = r.steps[i];
        stepList.appendChild(li);
    }

}
else{
    document.getElementById("recipeTitle").innerText = "Recipe Not Found";
}