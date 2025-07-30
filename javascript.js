
const navLinks = document.querySelectorAll('.nav-item');

// Get the current URL
const currentPage = window.location.href;

// Loop through each link and check if its href matches the current URL
navLinks.forEach(link => {
  if (currentPage.includes(link.getAttribute('href'))) {
    link.classList.add('active'); // Add active class to the matching link
  } else {
    link.classList.remove('active'); // Remove active class from non-matching links
  }
});

