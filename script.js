// Navigation scroll behavior
let lastScroll = 0;
const header = document.querySelector('.l-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('hide');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('hide')) {
    // Scrolling down
    header.classList.add('hide');
  } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
    // Scrolling up
    header.classList.remove('hide');
  }
  
  lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavLink); 