// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===========================
// Navbar Shadow
// ===========================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

}


// ===========================
// Fade In Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});


// ===========================
// EmailJS Contact Form
// ===========================

emailjs.init({
    publicKey: "zIJfPdDswuj1bYpJ4",
});


const contactForm = document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        emailjs.send(
            "service_m15pt0l",
            "template_a19gpvo",
            {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )

        .then(() => {

            alert("Message sent successfully!");

            contactForm.reset();

        })


        .catch((error) => {

            alert("Failed to send message.");

            console.log(error);

        });

    });

}