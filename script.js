document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }

            // Close the navbar on small screens after clicking a link
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    // Form Validation
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", (e) => {
        if (!contactForm.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        contactForm.classList.add("was-validated");
    });

    // Navbar Toggler for Mobile
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.toggle("show");
    });
});