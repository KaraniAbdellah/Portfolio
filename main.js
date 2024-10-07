

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
    const elements = this.document.querySelectorAll(".page");
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 < this.window.innerHeight && rect.bottom >= 0) { 
            element.classList.add("inDown");
        } else {
            element.classList.remove("inDown");
        }
    });
});

















