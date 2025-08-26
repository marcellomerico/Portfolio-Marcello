// Navbar-Anpassung beim Scrollen
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Alle Navigationslinks und Sektionen einsammeln
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

// Scroll-Reveal wieder aktivieren
const reveals = document.querySelectorAll('.scroll-reveal');
function revealOnScroll() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > 80;
    if (inView) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Klick auf einen Menüpunkt: direkt aktiv setzen, dann scrollen
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    e.preventDefault();
    // Alle Links zurücksetzen und diesen aktiv setzen
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Höhe der Navbar berücksichtigen
    const navbarHeight = navbar.offsetHeight;
    const top = targetSection.offsetTop - navbarHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Beim Scrollen die aktuell sichtbare Sektion finden und Navigation anpassen
function highlightOnScroll() {
  const offset = navbar.offsetHeight + 16;
  let currentId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - offset;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentId = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
}
window.addEventListener('scroll', highlightOnScroll);
window.addEventListener('load', highlightOnScroll);