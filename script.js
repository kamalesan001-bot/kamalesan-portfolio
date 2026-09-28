/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");


    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* =========================================
   SMOOTH SCROLLING
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            return;
        }

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(".animate");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const successMessage =
    document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;


    /* CLEAR ERRORS */

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";


    nameInput.classList.remove("error-input");

    emailInput.classList.remove("error-input");

    messageInput.classList.remove("error-input");


    /* NAME VALIDATION */

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        nameInput.classList.add(
            "error-input"
        );

        isValid = false;

    }


    /* EMAIL VALIDATION */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        emailInput.classList.add(
            "error-input"
        );

        isValid = false;

    } else if (
        !emailPattern.test(
            emailInput.value.trim()
        )
    ) {

        emailError.textContent =
            "Please enter a valid email.";

        emailInput.classList.add(
            "error-input"
        );

        isValid = false;

    }


    /* MESSAGE VALIDATION */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        messageInput.classList.add(
            "error-input"
        );

        isValid = false;

    } else if (
        messageInput.value.trim().length < 10
    ) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageInput.classList.add(
            "error-input"
        );

        isValid = false;

    }


    /* SUCCESS */

    if (isValid) {

        successMessage.textContent =
            "✓ Message submitted successfully!";

        contactForm.reset();

    }

});


/* =========================================
   PROJECT DEMO LINKS
========================================= */

document.querySelectorAll(".demo-btn").forEach(button => {

    button.addEventListener("click", function (event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Live Demo is not available for this project yet."
            );

        }

    });

});
