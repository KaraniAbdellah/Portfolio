
let nav_links = document.querySelector(".nav-links");
let navbar = document.querySelector(".navbar i");
let header_box = document.querySelector(".header");

navbar.addEventListener("click", function() {
    nav_links.classList.toggle("open");
    header_box.classList.toggle("open");
    if (nav_links.classList.contains("open")) {
        navbar.className = "fa-solid fa-xmark";
    } else {
        navbar.className = "fa-solid fa-bars";
    }
});








