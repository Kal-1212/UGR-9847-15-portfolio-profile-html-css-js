const hamburgerIcon = document.querySelector(".header-humberger i");
const sideMenu = document.querySelector(".humberger-menu");
const closeIcon = document.querySelector(".header-close i");

hamburgerIcon.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
});

closeIcon.addEventListener("click", () => {
  sideMenu.classList.remove("visible");
});

document.addEventListener("click", (event) => {
  if (
    !sideMenu.contains(event.target) &&
    !hamburgerIcon.contains(event.target)
  ) {
    sideMenu.classList.remove("visible");
  }
});
// Get all option elements
const options = document.querySelectorAll(".option");

// Add event listener to each option
options.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove 'active' class from all options
    options.forEach((opt) => opt.classList.remove("active"));

    // Add 'active' class to the clicked option
    option.classList.add("active");

    // Toggle skill visibility based on active option
    const skillList = document.querySelector(".skill-hidden");
    const experienceList = document.querySelectorAll(".skill-hidden")[1];
    const educationList = document.querySelectorAll(".skill-hidden")[2];

    // Show or hide corresponding lists based on the active option
    if (option.textContent.trim() === "Skills") {
      skillList.classList.add("visible");
      experienceList.classList.remove("visible");
      educationList.classList.remove("visible");
    } else if (option.textContent.trim() === "Experience") {
      experienceList.classList.add("visible");
      skillList.classList.remove("visible");
      educationList.classList.remove("visible");
    } else if (option.textContent.trim() === "Education") {
      educationList.classList.add("visible");
      skillList.classList.remove("visible");
      experienceList.classList.remove("visible");
    }
  });
});
