/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a navigation link */

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const themeIcon = themeToggle.querySelector("i");

    /* Load saved theme */

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");


        if (isDark) {

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }

    });

}


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId &&
            targetId !== "#" &&
            document.querySelector(targetId)
        ) {

            event.preventDefault();

            const target =
                document.querySelector(targetId);

            const headerHeight =
                document.querySelector(".header")
                    ?.offsetHeight || 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(".animate");


const observerOptions = {

    threshold: 0.15,

    rootMargin: "0px 0px -40px 0px"

};


const animationObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        observerOptions
    );


animatedElements.forEach(element => {

    animationObserver.observe(element);

});


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* Error elements */

        const nameError =
            document.getElementById("name-error");

        const emailError =
            document.getElementById("email-error");

        const messageError =
            document.getElementById("message-error");

        const successMessage =
            document.getElementById("form-success");


        /* Clear previous messages */

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";


        let isValid = true;


        /* Name validation */

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        } else if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;

        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        /* Message validation */

        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        } else if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            isValid = false;

        }


        /* Successful validation */

        if (isValid) {

            successMessage.textContent =
                "Thank you! Your message has been validated successfully.";

            contactForm.reset();

        }

    });

}


/* =========================================================
   LIVE DEMO BUTTONS
========================================================= */

const demoButtons =
    document.querySelectorAll(".demo-btn");


demoButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        const link =
            this.getAttribute("href");


        if (link === "#") {

            event.preventDefault();

            alert(
                "Live Demo is not available for this project yet."
            );

        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.style.color = "";

        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.style.color =
                "var(--primary-color)";

        }

    });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
