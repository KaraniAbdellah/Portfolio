
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
    let eleMode = $("p.ele_mode");
    let allText = $(".text-secondary");
    let mainButton = $(".main_button");
    let navItem = $(".nav_item");
    let techsList = $(".techs li");
    let cards = $(".cards .card");
    let btnMoreProjects = $(".more_projects");
    let nameInput = $(".name_input");
    let textareaInput = $(".textarea_input");
    let experInfo = $(".experience-item .info");
    let experCards = $(".experience-item");

    if (window.localStorage.getItem("page_mode") === "dark") {
        applyCommonChanges();
        switchToDarkMode();
    }

    function applyCommonChanges() {
        // Toggle Experience Cards
        experCards.each(function () {
            $(this).toggleClass("light dark");
        });

        // Toggle Experience Info
        experInfo.each(function () {
            $(this).toggleClass("light dark");
        });

        // Toggle Main Button Theme
        mainButton.toggleClass("light dark");

        // Toggle Technology List Items
        techsList.each(function () {
            $(this).toggleClass("light dark");
        });

        // Toggle Cards Theme
        cards.each(function () {
            $(this).toggleClass("light dark");
        });

        // Toggle More Projects Button
        btnMoreProjects.toggleClass("light dark");

        // Toggle Input Fields
        nameInput.toggleClass("light dark");
        textareaInput.toggleClass("light dark");
    }

    function switchToDarkMode() {
        // Change Icon to Sun
        eleMode.html(`<i class="fa-solid fa-sun"></i>`);

        // Change Text Color to White
        allText.each(function () {
            $(this).removeClass("text-secondary").css("color", "white");
        });

        // Set Body Background and Class
        $("body").css("background-color", "#212737").removeClass("light");

        // Update Nav Item Image
        navItem.html(`<img src="images/down-chevron.png" alt="scroll image">`);
    }

    function switchToLightMode() {
        // Change Icon to Moon
        eleMode.html(`<i class="fa-solid fa-moon"></i>`);

        // Restore Text Secondary Class
        allText.each(function () {
            $(this).addClass("text-secondary");
        });

        // Reset Body Background and Class
        $("body").css("background-color", "white").addClass("light");

        // Update Nav Item Image
        navItem.html(`<img src="images/arrow-scroll.png" alt="scroll image">`);
    }

    eleMode.on("click", function () {
        applyCommonChanges();

        if ($("body").hasClass("light")) {
            window.localStorage.setItem("page_mode", "dark");
            switchToDarkMode();
        } else {
            window.localStorage.setItem("page_mode", "light");
            switchToLightMode();
        }
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
    more_projects.click(function () {
        console.log("Hello Cards");
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
    });





    
    






    




});



