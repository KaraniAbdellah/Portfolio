
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
    let techs_li = $(".techs li");
    let cards = $(".cards .card");
    let btn_more_projects = $(".more_projects");
    ele_mode.on("click", function() {
        // Change the Theme for main_button
        main_button.toggleClass("dark");
        main_button.toggleClass("light");
        // Change the Theme for Technology Card
        techs_li.each(function() {
            $(this).toggleClass("light");
            $(this).toggleClass("dark");
        });
        // Change the Theme for Technology Card
        cards.each(function() {
            $(this).toggleClass("light");
            $(this).toggleClass("dark");
        });
        // Change the Color more_projects button
        btn_more_projects.toggleClass("light");
        btn_more_projects.toggleClass("dark");
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
        $("html, body").animate({
            scrollTop: $("section#about_me").offset().top - 100
        }, 100);
    });

    // Scroll Between Sections
    let section_links = $(".nav_links  p");
    section_links.each(function() {
        $(this).on("click", function() {
            let section_id = `section#${$(this).attr("id")}`;
            $("html, body").animate({
                scrollTop: $(section_id).offset().top - 100
            }, 100);
        });
    });

    // Custom The Change COlor For Header
    // let sections = $("section");
    // console.log($("section#about_me").offset().top);
    // $(document).on("scroll", function () {
    //     let sections = $("section");
    //     sections.each(function () {
    //         let ele_id = $(`.nav_links p#${$(this).attr("id")}`);
    //         console.log(ele_id);
    //         if (window.scrollY + 120 >= $(this).offset().top) {
    //             ele_id.addClass("clicked");
    //         } else {
    //             ele_id.removeClass("clicked");
    //         }
    //     });
    // });

    // Show More Projects By Click to PLus
    let hidden_cards = $(".hidden-card");
    let more_projects = $(".more_projects");
    console.log(hidden_cards);
    more_projects.click(function () {
        hidden_cards.each(function() {
            $(this).removeClass("hidden-card");
        });
        more_projects.addClass("hidden-phone").addClass("hidden-desktop");
    });

    // Generate a Message for Submission
    let submit_btn = $(".submit_btn");
    let email_input = $(".email_input");
    let textarea_input = $(".textarea_input");
    submit_btn.click(function () {
        if (email_input.val() != "" && textarea_input.val() != "") {
            submit_btn.text("Submitted");
            submit_btn.addClass("btn-success");
            submit_btn.removeClass("btn-primary");
            setInterval(function() {
                submit_btn.text("Submit");
                submit_btn.removeClass("btn-success");
                submit_btn.addClass("btn-primary");
            }, 2000);
        }
    });

    // Animation for name & Connect
    var typed = new Typed(".auto-type-name", {
        strings: ["Moroccan", "Abdellah"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: false,
    });
    var typed = new Typed(".auto-type-connect", {
        strings: ["Drink☕", "Improve", "Change"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
    });



    
    






    




});



