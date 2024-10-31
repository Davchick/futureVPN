const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const hamburgerIcon = document.querySelector(".hamburger-icon");
const themeSwitch = document.querySelector(".theme-switch");
const navLinks = document.querySelectorAll(".nav-link");
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");
const savedTheme = localStorage.getItem("theme");
const menu = document.querySelector(".navbar");
const theme = document.documentElement;

// Check if there is a saved theme in the localStorage or not.
if (savedTheme) {
  theme.className = savedTheme;
} else if (prefersDark) {
  theme.className = "dark";
} else {
  theme.className = "light";
}

//  Logic of the theme switch button, keep user's preferences in the localStorage.
themeSwitch.addEventListener("click", () => {
  if (theme.className === "dark") {
    theme.className = "light";
    localStorage.setItem("theme", "light");
  } else if (theme.className === "light") {
    theme.className = "dark";
    localStorage.setItem("theme", "dark");
  }
});


// Logic of the hamburger button.
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
});

// Close menu by clicking on a navigation item.
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    menu.classList.remove("active");
  });
});
