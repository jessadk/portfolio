const nav = document.querySelector('.nav-bar-wrapper');
const navToggle = document.querySelector('#mobile-nav-toggle');
const toggleImg = document.querySelector('#toggle-img');
const links = document.querySelectorAll('.link');
const email =  document.querySelector('.email');

// toggle mobile nav menu
navToggle.addEventListener('click', () => {
    // get current visibility state
    const visibility = nav.getAttribute('data-visible');
    // if hidden, change styles
    if (visibility == 'false') {
        nav.setAttribute('data-visible', 'true');
        navToggle.style.backgroundColor = 'transparent';
        toggleImg.src = 'assets/icons/menu-close.svg';
    } else {
        nav.setAttribute('data-visible', 'false');
        toggleImg.src = 'assets/icons/menu.svg';
        navToggle.style.backgroundColor = 'var(--off-white)';
    } 
});

// handle click events on navigation links to close the mobile menu
for (let link of links) {
    link.addEventListener('click', () => {
        nav.setAttribute('data-visible', 'false');
        toggleImg.src = 'assets/icons/menu.svg';
        navToggle.style.backgroundColor = 'var(--off-white)';
    });
  }

  // toggles email link tooltip text and copies email to system clipboard
email.addEventListener('mouseover', ()=>{
    email.setAttribute('data-text', 'Copy');
});
email.addEventListener('click', ()=>{
    navigator.clipboard.writeText(email.innerText);
    email.setAttribute('data-text', 'Copied');
});

