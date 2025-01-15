
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
    let name_input = $(".name_input");
    let textarea_input = $(".textarea_input");
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
        // Change The Input Background
        name_input.toggleClass("light");
        name_input.toggleClass("dark");
        textarea_input.toggleClass("dark");
        textarea_input.toggleClass("light");
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

    // Custom The Change Color For Header
    // let sections = $("section");
    // console.log($("section#contact").offset().top);
    // $(document).on("scroll", function () {
    //     let scrollPosition = window.scrollY + 120;
    
    //     sections.each(function () {
    //         let sectionId = $(this).attr("id");
    //         let ele_id = $(`.nav_links p#${sectionId}`);
    //         if (scrollPosition >= $(this).offset().top) {
    //             $(".nav_links p").removeClass("clicked");
    //             ele_id.addClass("clicked");
    //         } else if (scrollPosition >= 2630) {
    //             let contact_link_ele = $(".nav_links p#contact");
    //             let project_link_ele = $(".nav_links p#projects");
    //             contact_link_ele.addClass("clicked");
    //             project_link_ele.removeClass("clicked");
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
    submit_btn.click(function () {
        if (name_input.val() != "" && textarea_input.val() != "") {
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
    let typed1 = new Typed(".auto-type-name", {
        strings: ["Moroccan", "Abdellah"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: false
    });

    let typed2 = new Typed(".auto-type-connect", {
        strings: ["Drink☕", "Improve", "Change"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
    });


    

    $(".submit_btn").click(function () {
        console.log(name_input.val());
        console.log(textarea_input.val());
        if (name_input.val() == "") {
            console.log("the filied name is required");
            $(".message_input").text("this filied is required");
        } else {
            $(".message_input").text("");
        }
        if (textarea_input.val() == "") {
            console.log("the filied name is required");
            $(".message_textarea").text("this filied is required");
        } else {
            $(".message_textarea").text("");
        }
    })



    
    






    




});



