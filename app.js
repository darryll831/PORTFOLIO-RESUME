const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// Get the toggle switch
const modeToggle = document.getElementById('modeToggle');

// Function to toggle modes
modeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Optional: Set the default mode based on user preference
window.onload = () => {
  if (localStorage.getItem('dark-mode') === 'enabled') {
    modeToggle.checked = true;
    document.body.classList.add('dark-mode');
  }
};

// Save user's preference in local storage
modeToggle.addEventListener('change', () => {
  if (modeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled');
  }
});