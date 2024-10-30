const hamburgerIcon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
let theme = document.documentElement;
const themeSwitch = document.querySelector(".theme-switch");
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    menu.classList.remove("active");
  });
});


if (savedTheme) {
  theme.className = savedTheme;
} else if (prefersDark) {
  theme.className = "dark";
} else {
  theme.className = "light";
}

themeSwitch.addEventListener("click", () => {
  if (theme.className === "dark") {
    theme.className = "light";
    localStorage.setItem("theme", "light");
  } else if (theme.className === "light") {
    theme.className = "dark";
    localStorage.setItem("theme", "dark");
  }
});
