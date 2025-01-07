
// $(document).ready(function() {
    //     nav_links.click();
    //     let nav_links = document.querySelector(".nav-links");

// });

let nav_icon = document.querySelector(".navbar-icon");
let nav_links = document.querySelector(".nav_links");
nav_icon.addEventListener("click", function() {
    if (nav_links.classList.contains("hidden-phone")) {
        nav_icon.innerHTML = `<i class="fa-solid fa-x"></i>`;
    } else {
        nav_icon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
    nav_links.classList.toggle("show");
    nav_links.classList.toggle("hidden-phone");
});
