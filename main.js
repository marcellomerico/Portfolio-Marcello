// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll reveal
const reveals = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > 100;
    if (inView) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Highlight active menu item
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const highlightCurrentSection = () => {
  let index = sections.length;

  while (--index >= 0) {
    if (window.scrollY + 90 >= sections[index].offsetTop) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = sections[index].getAttribute('id');
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
      break;
    }
  }
};

window.addEventListener('scroll', highlightCurrentSection);
window.addEventListener('load', highlightCurrentSection);
