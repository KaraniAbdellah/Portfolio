
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
let mode_ele = document.querySelector(".ele_mode");


mode_ele.addEventListener("click", function() {
    if (mode_ele.classList.contains("light")) {
        mode_ele.classList.add("dark");
        mode_ele.classList.remove("light");
        // add some changes to the content page
        document.body.style.backgroundColor = "white";
        
        const eles_white = document.querySelectorAll(".white");
        eles_white.forEach(element => {
            element.classList.remove("white");
            element.classList.add("dark");
        });
        
        let title_eles = document.querySelectorAll(".title span");
        title_eles.forEach(element => {
            element.classList.add("dark");
            element.style.backgroundColor = "white";
        });

        let cards = document.querySelectorAll(".card");
        cards.forEach(element => {
            element.classList.add("light");
        });

        let blue_eles = document.querySelectorAll(".blue");
        blue_eles.forEach(element => {
            element.classList.add("blue-light");
            element.classList.remove("blue");
        });

        let nav_links_eles = document.querySelectorAll(".nav-links a");
        nav_links_eles.forEach(element => {
            element.classList.add("blue-light");
            element.classList.remove("blue");
        });

    }
    else {
        mode_ele.classList.add("light");
        mode_ele.classList.remove("dark");
    }
});






