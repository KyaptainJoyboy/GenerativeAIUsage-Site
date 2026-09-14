// ================================
// SIMPLE JAVASCRIPT FUNCTIONALITY
// ================================

/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 1000);

});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Highlight the section currently being viewed
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));

      const current = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );

      if (current) current.classList.add("active");
    }
  });
}, {
  threshold: 0.35
});

sections.forEach(section => observer.observe(section));

// Simple scroll reveal animation
const revealItems = document.querySelectorAll(
  ".text-card, .info-card, .detect-card, .danger-list article, .quiz-box, .about-content"
);

revealItems.forEach(item => item.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealItems.forEach(item => revealObserver.observe(item));

// Mini quiz
const quizButtons = document.querySelectorAll(".quiz-options button");
const quizResult = document.getElementById("quizResult");

quizButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.answer === "correct") {
      quizResult.textContent = "Correct! Impossible anatomy is a common warning sign.";
    } else {
      quizResult.textContent = "Not quite. Look for unusual or impossible details.";
    }
  });
});
