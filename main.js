
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
    let main_button = $(".main_button");
    let nav_item = $(".nav_item");
    ele_mode.on("click", function() {
        // Change the Theme for main_button
        main_button.toggleClass("dark");
        main_button.toggleClass("light");
        if ($("body").hasClass("light")) {
            // Change the icon to sun
            ele_mode.html(`<i class="fa-solid fa-sun"></i>`);
            // Change Text Color to White
            All_text.each(function () {
                $(this).removeClass("text-secondary");
                $(this).css("color", "white");
            });
            // Change Body Color
            $("body").css("background-color", "#212737");
            // Change Body Class
            $("body").removeClass("light");
            // Change the Image Down
            nav_item.html(`<img src="images/down-chevron.png" alt="scroll image">`);
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
            // Change the Image Down
            nav_item.html(`<img src="images/arrow-scroll.png" alt="scroll image">`);
        }

    });


    // Scroll Down
    nav_item.on("click", function() {
        console.log($("section#about_me"));
        $("html, body").animate({
            scrollTop: $("section#about_me").offset().top - 100
        }, 100);
    });

    // Scroll Between Sections
    let home = $("section#intro");
    let about_me = $("section#about_me");
    let experience = $("section#experience");
    let projects = $("section#projects");
    let contact = $("section#contact");

    
    




});



