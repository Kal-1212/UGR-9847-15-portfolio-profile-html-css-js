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

const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove("active"));

    option.classList.add("active");

    const skillList = document.querySelector(".skill-hidden");
    const experienceList = document.querySelectorAll(".skill-hidden")[1];
    const educationList = document.querySelectorAll(".skill-hidden")[2];

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


window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    sideMenu.classList.remove("visible");

    
    const sections = document.querySelectorAll(".skill-hidden");
    sections.forEach((section) => {
      section.classList.remove("visible");
    });
  }
});
