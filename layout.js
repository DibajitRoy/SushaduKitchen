
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