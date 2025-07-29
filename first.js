// Toggle Navigation on Mobile

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Toggle Light/Dark Mode
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Toggle icon
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️'; // Light mode icon
  } else {
    themeToggle.textContent = '🌙'; // Dark mode icon
  }
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
