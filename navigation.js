const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add event listener to hamburger menu
hamburger.addEventListener("click",() => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
   document.body.classList.toggle("no-scroll"); // Toggle no-scroll class
   document.querySelector("header").classList.add("nav-filter");
})

// Add event listeners to all .nav-link elements
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=> {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
   document.body.classList.remove("no-scroll");
}))

// Add event listener to entire document to remove 'no-scroll' class when user clicks outside menu
document.addEventListener("click", (event) => {
   const isClickInsideMenu = navMenu.contains(event.target) || hamburger.contains(event.target);
   if (!isClickInsideMenu) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
   }
});


// Get the popup element
var popup = document.querySelector('.popup');

// Get the button that triggers the popup
var btn = document.querySelector('.popup-btn');

// Get the close button
var close = popup.querySelector('.close');

// When the user clicks the button, display the popup
btn.addEventListener('click', function() {
  popup.style.display = 'block';
});

// When the user clicks the close button, hide the popup
close.addEventListener('click', function() {
  popup.style.display = 'none';
});

// No scrooll down . Get the body element
var body = document.querySelector('body');

// When the user clicks the button, display the popup and disable scrolling
btn.addEventListener('click', function() {
popup.style.display = 'block';
body.style.overflow = 'hidden';
});

// When the user clicks the close button, hide the popup and re-enable scrolling
close.addEventListener('click', function() {
popup.style.display = 'none';
body.style.overflow = 'auto';
});
