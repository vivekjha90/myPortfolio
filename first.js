// Toggle Navigation on Mobile

function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}




// Smooth Scroll for #backtotop
// Back to top button smooth scroll
document.getElementById("backtotop")?.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const textElement = document.getElementById("text");

  const texts = [
    "Engineering ideas into reality",
    "I specialize in MERN Stack",
   "Love to explore and evolve"
  ];

  let count = 0;
  let index = 0;

  function type() {
    if (count === texts.length) count = 0;

    const currentText = texts[count];
    textElement.textContent = currentText.slice(0, ++index);

    if (index === currentText.length) {
      setTimeout(() => {
        index = 0;
        count++;
      }, 1500);
    }

    setTimeout(type, 80);
  }

  type();
});
