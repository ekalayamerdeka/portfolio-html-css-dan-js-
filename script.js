document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const ofset = 20;
      const targetPosition = targetSection.offsetTop - ofset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});
