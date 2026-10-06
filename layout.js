// Sign in page er file naam. Rename korle ekhane o change korbe.
var SIGNIN_PAGE = "sign%20_in.html";

// 1) Login chara kono page e dhukte dibe na
if (sessionStorage.getItem("loggedIn") !== "yes") {
    window.location.replace(SIGNIN_PAGE);
}

// 2) Sign Out: login information muche Sign In page e pathabe
function logout() {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("username");
    window.location.href = SIGNIN_PAGE;
}

// 3) Je page e acho, navbar e oi link highlight hobe
(function () {
    var page = window.location.pathname.split("/").pop();

    if (page === "") {
        page = "home.html";
    }

    var links = document.querySelectorAll("nav a");

    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href") === page) {
            links[i].classList.add("active");
        }
    }
})();

// 4) Navbar e "Welcome, Nam" dekhano
(function () {
    var name = sessionStorage.getItem("username");

    if (!name) {
        return;
    }

    var header = document.querySelector("header");
    var button = document.querySelector("header button");

    if (header && button) {
        var box = document.createElement("div");
        box.className = "header-right";

        var welcome = document.createElement("span");
        welcome.className = "user-welcome";
        welcome.textContent = "Welcome, " + name;

        header.insertBefore(box, button);
        box.appendChild(welcome);
        box.appendChild(button);
    }

    // Home page er hero box e boro welcome message
    var heroMsg = document.getElementById("welcomeMsg");

    if (heroMsg) {
        heroMsg.textContent = "Welcome to SushaduKitchen, " + name + "!";
    }
})();