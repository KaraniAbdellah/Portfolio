

// Fix The NavBar
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


// Fix The Dark Mode
const mode_ele = document.querySelector(".ele_mode");

mode_ele.addEventListener("click", function() {
    let attr_value = document.body.getAttribute('data-theme');
    if (attr_value === "dark") {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});


// Auto-Type
var typed = new Typed(".auto-type", {
    strings: ["Moroccan", "Abdellah"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
});


// Animation For All Element
/* 
    - rect.top: distance from the top of page to the element
    - rect.height: height of element
*/

window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".trigger");
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            element.classList.add("inDown");
        }
    });
});

function main_page_trigger() {
    document.addEventListener("DOMContentLoaded", function() {
        const element = document.querySelector("#intro");
        if (element.getBoundingClientRect().top <= window.innerHeight * 0.8) {
            element.classList.add("inDown");
        }
    });
}

main_page_trigger();


// custom the animation ---> go to see the video about idea














