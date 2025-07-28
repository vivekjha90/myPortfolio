// Toggle Navigation on Mobile

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Toggle Light/Dark Mode
const btn = document.getElementById("btn");
let isDark = false;

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
  btn.innerHTML = isDark ? `<i class="ri-moon-line"></i>` : `<i class="ri-sun-line"></i>`;
});

// Smooth Scroll for #backtotop
// Back to top button smooth scroll
document.getElementById("backtotop")?.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
