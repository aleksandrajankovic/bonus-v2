  document.addEventListener('DOMContentLoaded', () => {
    const hero = document.getElementById('heroSection');
    const cta  = document.getElementById('stickyCta');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
       
            cta.classList.remove('hidden');
          } else {
       
            cta.classList.add('hidden');
          }
        });
      },
      {
        root: null,       
        threshold: 0,        
      }
    );

    observer.observe(hero);
  });



/*ACCORDION*/
document.querySelectorAll(".faq-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("hidden");
    // okretanje strelice
    const arrow = btn.querySelector("img");
    arrow.classList.toggle("rotate-90");
  });
});



/*SHOW MORE*/
const btn = document.getElementById("showMoreBtn");
const more = document.getElementById("moreText");
const container = document.getElementById("textContainer");
const overlay = document.getElementById("fadeOverlay");

btn.addEventListener("click", () => {
  more.classList.toggle("hidden");

  container.classList.toggle("expanded");

  overlay.classList.toggle("hidden");

  btn.textContent = more.classList.contains("hidden")
    ? "PRIKAZI VIŠE"
    : "PRIKAŽI MANJE";
});
/*FOOTER SLIDER*/

function autoSlide(sliderContainer) {
  const wrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides = sliderContainer.querySelectorAll(".slider-slide");
  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;

  function moveSlides() {
    currentPosition -= 1;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth) {
      currentPosition = 0;
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(${currentPosition}px)`;
    }
  }

  setInterval(moveSlides, 30);
}
const sliderContainers = document.querySelectorAll(".slider-container");
sliderContainers.forEach(autoSlide);



