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
