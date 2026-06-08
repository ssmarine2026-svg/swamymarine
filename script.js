const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const year = document.querySelector("[data-year]");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* HERO PARALLAX EFFECT */

const heroImage = document.querySelector(".hero-media img");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  if (heroImage) {
    heroImage.style.transform =
      `translateY(${scrolled * 0.25}px) scale(1.08)`;
  }
});

/* SURVEY COUNTER */

const counter = document.getElementById("surveyCount");

let started = false;

window.addEventListener("scroll", () => {

  if (counter && !started) {

    const pos = counter.getBoundingClientRect().top;

    if (pos < window.innerHeight) {

      started = true;

      let count = 0;

      const interval = setInterval(() => {

        count += 10;

        counter.innerText = count + "+";

        if (count >= 500) {
          clearInterval(interval);
        }

      }, 20);

    }

  }

});

const checks = document.querySelectorAll(".check-item");

window.addEventListener("scroll", ()=>{

 checks.forEach(item=>{

  const top = item.getBoundingClientRect().top;

  if(top < window.innerHeight-100){

      item.classList.add("active");

  }

 });

});

const points = document.querySelectorAll(".point");

window.addEventListener("scroll",()=>{

points.forEach((point,index)=>{

const pos = point.getBoundingClientRect().top;

if(pos < window.innerHeight-100){

setTimeout(()=>{

point.classList.add("active");

},index*300);

}

});

});
