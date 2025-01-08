
$(document).ready(function () {
    // Show Navbar
    let nav_icon = $(".navbar-icon");
    let nav_links = $(".nav_links");

    nav_icon.on("click", function () {
        if (nav_links.hasClass("hidden-phone")) {
            nav_icon.html('<i class="fa-solid fa-x"></i>');
        } else {
            nav_icon.html('<i class="fa-solid fa-bars"></i>');
        }
        nav_links.toggleClass("show hidden-phone");
    });

    // Hide Navbar
    $(".nav_links > a").on("click", function () {
        nav_links.removeClass("show").addClass("hidden-phone");
        nav_icon.html('<i class="fa-solid fa-bars"></i>');
    });

    // Start Change Text Code
    let ele_mode = $("p.ele_mode");
    let All_text = $(".text-secondary");
    ele_mode.on("click", function() {
        if ($("body").hasClass("light")) {
            // Change the icon to sun
            ele_mode.html(`<i class="fa-solid fa-sun"></i>`);
            // Change Text Color to White
            All_text.each(function () {
                $(this).removeClass("text-secondary");
                $(this).css("color", "white");
            });
            // Change Body Color
            $("body").css("background-color", "rgb(33, 39, 55)");
            // Change Body Class
            $("body").removeClass("light");
        } else {
            // Change the icon to sun
            ele_mode.html(`<i class="fa-solid fa-moon"></i>`);
            // Change Text Color to White
            All_text.each(function () {
                $(this).addClass("text-secondary");
            });
            // Change Body Color
            $("body").css("background-color", "white");
            // Change Body Class
            $("body").addClass("light");
        }
    });



});



