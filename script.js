/* =========================================================
   SAFE PORTFOLIO SCRIPT
   Keeps the existing dynamic IDs working and provides
   navigation/back-to-top/profile fallback behavior.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }

  const profileImage = document.getElementById("profileImage");
  const profileFallback = document.getElementById("profileFallback");

  if (profileImage && profileFallback) {
    profileImage.addEventListener("error", function () {
      profileImage.style.display = "none";
      profileFallback.style.display = "flex";
    });
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (!backToTop) return;
    backToTop.style.display = window.scrollY > 500 ? "flex" : "none";
  });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

});
