function goBack(){
    window.history.back();
}


var recipes = {
    cheeseburger: {
        title: "Cheeseburger",
        image: "./pic/Cheeseburger.jpg",
        difficulty: "Easy",
        time: "20 Minutes",
        ingredients: ["Burger bun", "Beef patty", "Cheese", "Tomato"],
        steps: ["Cook patty", "Toast bun", "Add cheese", "Serve"]
    },

    pizza: {
        title: "Pizza",
        image: "./pic/Pizza.avif",
        difficulty: "Medium",
        time: "30 Minutes",
        ingredients: ["Dough", "Cheese", "Sauce"],
        steps: ["Prepare base", "Add toppings", "Bake"]
    },

    creamypasta: {
        title: "Creamy Pasta",
        image: "./pic/Creamy Pasta.webp",
        difficulty: "Easy",
        time: "25 Minutes",
        ingredients: ["Pasta", "Milk", "Cream"],
        steps: ["Boil pasta", "Make sauce", "Mix"]
    }
};


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