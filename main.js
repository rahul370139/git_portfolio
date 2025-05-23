console.log('main.js script started');

/*=============== TOGGLE NAV MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
  
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
            toggle.setAttribute("aria-expanded", nav.classList.contains("show"));
        });
    }
};
showMenu("nav-toggle", "nav-menu");
console.log('Nav menu toggle setup complete');
  
/*=============== REMOVE MOBILE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll(".nav__link");
  
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    navMenu.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
}
navLinks.forEach((link) => link.addEventListener("click", linkAction));
  
/*=============== SCROLL ACTIVE SECTION LINK ===============*/
const sections = document.querySelectorAll("section[id]");
  
function scrollActive() {
    const scrollY = window.pageYOffset;
    const headerHeight = 60; // Matches --header-height in CSS
  
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerHeight;
        const sectionId = current.getAttribute("id");
  
        const navItem = document.querySelector(
            `.nav__menu a[href*="${sectionId}"]`
        );
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItem?.classList.add("active-link");
        } else {
            navItem?.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);
console.log('Scroll active setup complete');
  
/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: "top",
//     distance: "60px",
//     duration: 2000,
//     delay: 200,
//     reset: true
// });
  
// sr.reveal(".home__data, .home__img", {});
// sr.reveal(".home__social-icon", { interval: 200 });
// sr.reveal(".about__img, .about__subtitle", { delay: 400 });
// sr.reveal(".about__text", { delay: 400 });
// sr.reveal(".about__highlight-item", { interval: 200 });
// sr.reveal(".skills__data", { interval: 200 });
// sr.reveal(".work__card", { interval: 200 });

// Click-to-reveal cards - for static cards
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        // Consolidated logic for all clickable cards (Projects, Skills, Extras)
        const clickedCard = event.target.closest('.card--clickable');
        console.log('Card click event triggered', event.target);
        console.log('Closest clickable card:', clickedCard);

        if (clickedCard) {
            // Determine the type of card to close others correctly
            let baseClass = '';
            if (clickedCard.classList.contains('work__item')) {
                baseClass = 'work__item';
            } else if (clickedCard.classList.contains('skills__data')) {
                baseClass = 'skills__data';
            } else if (clickedCard.classList.contains('extra__card')) {
                baseClass = 'extra__card';
            }

            if (baseClass) {
                // Close other cards of the same type
                document.querySelectorAll(`.${baseClass}.is-open`).forEach(openCard => {
                    if (openCard !== clickedCard) {
                        openCard.classList.remove('is-open');
                        console.log(`Closed other ${baseClass}:`, openCard);
                    }
                });
            }

            // Toggle current card
            clickedCard.classList.toggle('is-open');
            console.log('Toggled is-open on card:', clickedCard);

            // Scroll into view if opened
            if (clickedCard.classList.contains('is-open')) {
                console.log('Scrolling card into view:', clickedCard);
                clickedCard.scrollIntoView({ block: "center", behavior: "smooth" });
            }

            event.stopPropagation(); // Stop event propagation after handling a card click
            return; // Exit the handler after processing a card click
        }

        // Logic for About highlights (separate as it doesn't use .card--clickable on the main item)
        const highlightHeader = event.target.closest('.about__highlight-header');
        console.log('About highlight header click detected:', highlightHeader);

        if (highlightHeader) {
            const highlightItem = highlightHeader.closest('.about__highlight-item');
            console.log('About highlight item found:', highlightItem);
            if (highlightItem) {
                console.log('Before toggle - is-open class present:', highlightItem.classList.contains('is-open'));

                // Close other About highlight items
                document.querySelectorAll('.about__highlight-item.is-open').forEach(openItem => {
                    if (openItem !== highlightItem) {
                        openItem.classList.remove('is-open');
                        console.log('Closed other About highlight item:', openItem);
                    }
                });

                // Toggle the clicked highlight item
                highlightItem.classList.toggle('is-open');
                console.log('After toggle - is-open class present:', highlightItem.classList.contains('is-open'));
                event.stopPropagation(); // Stop event propagation after handling
            }
            return; // Exit the handler after processing About highlight click
        }


        // Temporary global click listener for debugging - keep this for general debugging if needed, but it won't interfere with the above due to 'return'
        // console.log('Global click detected on:', e.target);

    });
});

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);
console.log('Scroll progress bar setup complete');

// Hide progress bar for reduced motion users
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    progressBar.style.display = 'none';
}

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
});

/* ---------- graceful mailto fallback ---------- */
document.body.addEventListener('click', e=>{
  const link = e.target.closest('[data-email]');
  if(!link) return;

  // Try native mailto first
  const email = link.dataset.email;
  const opened = window.open(`mailto:${email}`, '_self');

  // If the browser blocked or did nothing, open Gmail compose
  setTimeout(()=>{
    if (opened === null || opened.closed) {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                  '_blank','noopener');
    }
  }, 200);
});

/*=============== UNIVERSAL DELEGATED TOGGLE (About, Skills, Extras) ===============*/
document.body.addEventListener('click', e=>{
  // About / Skills / Extras accordions
  const accordionHeader = e.target.closest('.about__highlight-header, .skills__data-header, .extra__card-header');
  if(accordionHeader){
      const card = accordionHeader.closest('.card--clickable, .about__highlight-item, .skills__data, .extra__card');
      document.querySelectorAll('.is-open').forEach(c=>{ if(c!==card) c.classList.remove('is-open'); });
      card.classList.toggle('is-open');
      return; // stop here, avoids firing other handlers
  }
});

/*=============== LOAD PROJECTS FROM JSON ===============*/
fetch("projects.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then((projects) => {
        console.log('Projects data fetched and parsed', projects);
        const container = document.getElementById("projects-container");
        if (container) {
            console.log('Projects container found:', container);
            
            // Create cards
            projects.forEach((proj) => {
                const projectCard = document.createElement("div");
                projectCard.className = "work__item card--clickable";
                
                // Create the initial visible content
                const initialContent = document.createElement("div");
                initialContent.className = "work__initial";
                initialContent.innerHTML = `
                    <div class="work__img">
                        <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
                    </div>
                    <h3>${proj.title}</h3>
                `;
                
                // Create the expandable content
                const detailContent = document.createElement("div");
                detailContent.className = "card__detail";
                detailContent.innerHTML = `
                    <span class="work__date">${proj.date}</span>
                    ${proj.context ? `<span class="project__context">${proj.context}</span>` : ''}
                    <p>${proj.description}</p>
                    ${proj.type === 'github' ? 
                        `<a href="${proj.link}" class="work__link" target="_blank" rel="noopener">
                            <i class='bx bx-link-external'></i> View Project
                        </a>` :
                        `<div class="work__links">
                            ${proj.certificate ? `
                                <a href="${proj.certificate}" class="work__link" target="_blank" rel="noopener">
                                    <i class='bx bx-file'></i> View Certificate
                                </a>
                            ` : ''}
                            ${proj.link ? `
                                <a href="${proj.link}" class="work__link" target="_blank" rel="noopener">
                                    <i class='bx bx-link-external'></i> View Project
                                </a>
                            ` : ''}
                        </div>`
                    }
                `;
                
                projectCard.appendChild(initialContent);
                projectCard.appendChild(detailContent);
                container.appendChild(projectCard);
            });
        }
    })
    .catch((error) => {
        console.error('Error loading projects:', error);
    });
console.log('Project fetch initiated');

// Education accordion
document.querySelectorAll('.education__header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    const isOpen = card.classList.contains('is-open');
    
    // Close all other cards
    document.querySelectorAll('.education__card.is-open').forEach(openCard => {
      if (openCard !== card) {
        openCard.classList.remove('is-open');
      }
    });
    
    // Toggle current card
    card.classList.toggle('is-open');
  });
});
