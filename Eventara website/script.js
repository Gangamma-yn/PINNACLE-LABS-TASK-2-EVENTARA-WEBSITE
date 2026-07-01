/* ==========================
   DARK MODE TOGGLE
========================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}


/* ==========================
   EVENT COUNTDOWN TIMER
========================== */

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

if (days && hours && minutes && seconds) {

    // Set future event date
    const eventDate = new Date("August 15, 2027 09:00:00").getTime();

    const countdown = setInterval(() => {

        const now = new Date().getTime();

        const distance = eventDate - now;

        if (distance < 0) {

            clearInterval(countdown);

            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";

            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));

        const h = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const m = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const s = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

    }, 1000);
}


/* ==========================
   EVENT SEARCH
========================== */

function searchEvents() {

    const input = document
        .getElementById("searchInput")
        .value
        .toUpperCase();

    const cards = document.querySelectorAll(".search-item");

    cards.forEach(card => {

        const text = card.innerText.toUpperCase();

        if (text.indexOf(input) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


/* ==========================
   EVENT REGISTRATION FORM
========================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const registration = {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            event: document.getElementById("event").value,
            college: document.getElementById("college").value,
            message: document.getElementById("message").value

        };

        let registrations =
            JSON.parse(localStorage.getItem("registrations")) || [];

        registrations.push(registration);

        localStorage.setItem(
            "registrations",
            JSON.stringify(registrations)
        );

        const success =
            document.getElementById("successMessage");

        if (success) {
            success.style.display = "block";
        }

        registerForm.reset();

        setTimeout(() => {
            if (success) {
                success.style.display = "none";
            }
        }, 3000);

    });

}


/* ==========================
   CONTACT FORM
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const contactData = {

            name: document.getElementById("contactName").value,
            email: document.getElementById("contactEmail").value,
            subject: document.getElementById("contactSubject").value,
            message: document.getElementById("contactMessage").value

        };

        let messages =
            JSON.parse(localStorage.getItem("messages")) || [];

        messages.push(contactData);

        localStorage.setItem(
            "messages",
            JSON.stringify(messages)
        );

        const success =
            document.getElementById("contactSuccess");

        if (success) {
            success.style.display = "block";
        }

        contactForm.reset();

        setTimeout(() => {
            if (success) {
                success.style.display = "none";
            }
        }, 3000);

    });

}


/* ==========================
   SCROLL ANIMATION
========================== */

window.addEventListener("scroll", () => {

    const cards = document.querySelectorAll(
        ".event-card, .about-card, .benefit-card, .testimonial-card"
    );

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const trigger = window.innerHeight - 100;

        if (cardTop < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});


/* ==========================
   INITIAL CARD ANIMATION
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".event-card, .about-card, .benefit-card, .testimonial-card"
    );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease";

    });

});