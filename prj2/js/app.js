// Function to build the navbar dynamically based on sections in the HTML
function buildNavbar() {
  const sections = document.querySelectorAll("section");
  const menu = document.getElementById("menu");

  sections.forEach((section) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section.id}`; // Set link to the section's ID
    a.classList.add("menu-link");
    a.textContent = section.querySelector("h2").textContent; // Use section title as link text

    li.appendChild(a);
    menu.appendChild(li); // Add to the navbar
  });
}

// Function to highlight the active section in the navbar based on scroll position
function highlightActiveSection() {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Check if the section is in the middle of the viewport
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSectionId = section.id;
      }
    });

    // Remove active class from all links, then add it to the current section
    menuLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  });
}

// Function to add smooth scrolling when clicking on navbar links
function smoothScroll() {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default jump behavior

      const targetId = link.getAttribute("href").substring(1); // Get section ID
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
}

// Run functions when the page loads
buildNavbar();
highlightActiveSection();
smoothScroll();
