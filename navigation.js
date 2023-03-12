const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add event listener to hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll'); // Toggle no-scroll class
  document.querySelector('header').classList.add('nav-filter');
});

// Add event listeners to all .nav-link elements
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

// Add event listener to entire document to remove 'no-scroll' class when user clicks outside menu
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInsideMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
});

// Get the popup element
//const popup = document.querySelector('.popup');

// Get the button that triggers the popup
//const btn = document.querySelectorAll('.popup-btn');

// Get the close button
//const close = popup.querySelector('.close');

// When the user clicks the button, display the popup
//btn.addEventListener('click', () => {
//  popup.style.display = 'block';
//});

// When the user clicks the close button, hide the popup
//close.addEventListener('click', () => {
//  popup.style.display = 'none';
//});

const popGenrato = () => {
  const popup = document.querySelector('.popup');
  const btn = document.querySelectorAll('.popup-btn');
  const close = popup.querySelector('.close');
  btn.forEach((btns) => {
    btns.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

window.onload = () => {
  popGenrato();
};

// No scrooll down . Get the body element
const body = document.querySelector('body');

// When the user clicks the button, display the popup and disable scrolling
btn.addEventListener('click', () => {
  popup.style.display = 'block';
  body.style.overflow = 'hidden';
});

// When the user clicks the close button, hide the popup and re-enable scrolling
close.addEventListener('click', () => {
  popup.style.display = 'none';
  body.style.overflow = 'auto';
});

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (event) => {
  const email = emailInput.value.toLowerCase();
  if (emailInput.value !== email) {
    event.preventDefault();
    const error = document.createElement('p');
    error.style.color = 'red';
    error.innerHTML = 'Please enter your email address in lower case.';
    submitBtn.after(error);
  }
});
