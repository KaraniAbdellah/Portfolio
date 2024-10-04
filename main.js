
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
        change_icon("dark", "light");
        document.body.style.backgroundColor = "white";
        set_titles_classes("white", "dark");
        set_blue_classes("blue", "blue-light");
        set_white_classes("white", "dark");
    }
    else {
        change_icon("light", "dark");
        document.body.style.backgroundColor = "#0a192f";
        set_titles_classes("dark", "white");
        set_blue_classes("blue-light", "blue");
        set_white_classes("dark", "white");
    }
});


function change_icon(to_add, to_remove) {
    mode_ele.classList.add(to_add);
    mode_ele.classList.remove(to_remove);
}


function set_white_classes(to_add, to_remove) {
    const eles_white = document.querySelectorAll(`.${to_add}`);
    eles_white.forEach(element => {
        element.classList.add(to_remove);
        element.classList.remove(to_add);
    });
}


function set_blue_classes(to_add, to_remove) {
    let blue_eles = document.querySelectorAll(`.${to_add}`);
    blue_eles.forEach(element => {
        element.classList.add(to_remove);
        element.classList.remove(to_add);
    });
}

function set_titles_classes(to_add, to_remove) {
    let title_eles = document.querySelectorAll(".title span");
    title_eles.forEach(element => {
        element.classList.add(to_add);
        element.classList.remove(to_remove);
    });
}










