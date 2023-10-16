const nav = document.querySelector('.nav-bar-wrapper');
const navToggle = document.querySelector('#mobile-nav-toggle');
const links = document.querySelectorAll('.link');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    if (visibility == 'false') {
        nav.setAttribute('data-visible', 'true');
        navToggle.style.backgroundImage = 'url(../assets/icons/menu-close.svg)';
    } else {
        nav.setAttribute('data-visible', 'false');
        navToggle.style.backgroundImage = 'url(../assets/icons/menu.svg)';
    } 
});

for (let link of links) {
    link.addEventListener('click', () => {
        nav.setAttribute('data-visible', 'false');
        navToggle.style.backgroundImage = 'url(../assets/icons/menu.svg)';
    });
  }

