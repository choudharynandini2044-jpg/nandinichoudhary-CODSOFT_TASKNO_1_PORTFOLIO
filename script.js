/* ============================================================
   Personal Portfolio - JavaScript
   Handles: mobile nav, smooth scrolling, skill bars, form validation
   ============================================================ */

(function () {
  "use strict";

  // ---------- Mobile navigation toggle ----------
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked (mobile)
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll("section[id]");
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (!link) return;
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (l) { l.classList.remove("active"); });
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // ---------- Animate skill bars when in view ----------
  const skillCards = document.querySelectorAll(".skill-card");
  function animateSkills() {
    skillCards.forEach(function (card) {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60 && !card.classList.contains("animated")) {
        card.classList.add("animated");
        const level = card.getAttribute("data-level") || "0";
        const bar = card.querySelector(".progress-bar");
        if (bar) bar.style.width = level + "%";
      }
    });
  }
  window.addEventListener("scroll", animateSkills);
  window.addEventListener("load", animateSkills);
  animateSkills();

  // ---------- Footer year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Contact form validation ----------
  const form = document.getElementById("contactForm");
  if (form) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    function showError(el, msg) {
      el.textContent = msg;
    }

    function clearErrors() {
      showError(nameError, "");
      showError(emailError, "");
      showError(messageError, "");
      successMsg.textContent = "";
    }

    function isValidEmail(value) {
      // Simple, beginner-friendly email check
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();

      let valid = true;
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (name.length < 2) {
        showError(nameError, "Please enter your name (at least 2 characters).");
        valid = false;
      }

      if (!isValidEmail(email)) {
        showError(emailError, "Please enter a valid email address.");
        valid = false;
      }

      if (message.length < 10) {
        showError(messageError, "Message should be at least 10 characters.");
        valid = false;
      }

      if (valid) {
        successMsg.textContent =
          "Thank you! Your message has been validated. (Frontend-only: no message was actually sent.)";
        form.reset();
      }
    });
  }

  // ---------- Back to top smooth (already via CSS scroll-behavior) ----------
  // ---------- Resume download guard ----------
  // If resume.pdf is missing, the browser will simply 404; nothing to do client-side.
})();
