/* =========================================================
   ROMPALLY TEJA PORTFOLIO — JAVASCRIPT
   ========================================================= */


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-scale"
);

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}, {
    passive: true
});


/* =========================================================
   COPY EMAIL
   ========================================================= */

const copyEmailButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

const emailAddress = "tejarompally@gmail.com";


if (copyEmailButton) {

    copyEmailButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(emailAddress);

            copyMessage.textContent =
                "Email address copied successfully.";

            copyEmailButton.textContent =
                "Copied ✓";

            setTimeout(() => {

                copyMessage.textContent = "";

                copyEmailButton.textContent =
                    "Copy Email";

            }, 2500);

        } catch (error) {

            copyMessage.textContent =
                "Please copy: tejarompally@gmail.com";

        }

    });

}


/* =========================================================
   SMOOTH PROJECT OVERVIEW NAVIGATION
   ========================================================= */

document.querySelectorAll(".project-link").forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar nav a"
);


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});