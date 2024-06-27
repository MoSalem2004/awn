function toggleMobileMenu() {
  var navbarCollapse = document.getElementById("navbarCollapse");
  navbarCollapse.classList.toggle("open");
}

// This function will be called when any nav link is clicked
function closeMenu() {
  var navbarCollapse = document.getElementById("navbarCollapse");
  // Check if the menu is open, if so, close it
  if (navbarCollapse.classList.contains("open")) {
    navbarCollapse.classList.remove("open");
  }
}

// Add event listener to the toggle button
var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", toggleMobileMenu);

// Add event listener to each nav link
var navLinks = document.querySelectorAll("#mySidenav a.nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// Add event listener to close menu when clicking anywhere on the page
document.body.addEventListener("click", function (event) {
  var navbarCollapse = document.getElementById("navbarCollapse");
  // Check if the clicked element is not inside the navbar and the menu is open
  if (
    !event.target.closest(".navbar") &&
    navbarCollapse.classList.contains("open")
  ) {
    navbarCollapse.classList.remove("open");
  }
});

// end of navbar code

