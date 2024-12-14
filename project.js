document.addEventListener("DOMContentLoaded", () => {
  const projectItems = document.querySelectorAll(".projectItem");

  projectItems.forEach((item) => {
    const link = item.querySelector(".project-item-link");

    item.addEventListener("mouseenter", () => {
      link.style.display = "block"; // Make it visible
      setTimeout(() => {
        link.style.opacity = "1"; // Fade in
        link.style.transform = "translateY(60px)"; // Slide into position
      }, 0);
    });

    item.addEventListener("mouseleave", () => {
      link.style.opacity = "0"; // Fade out
      link.style.transform = "translateY(-20px)"; // Slide back up
      link.addEventListener(
        "transitionend",
        () => {
          link.style.display = "none"; // Hide completely after animation
        },
        { once: true }
      );
    });
  });
});
