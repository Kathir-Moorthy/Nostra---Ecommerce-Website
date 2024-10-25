// Toggle Dark Mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
        darkModeBtn.title = "Light Mode"; 
    } else {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
        darkModeBtn.title = "Dark Mode";
    }
});

// Show and Hide Sign-in Popup
const signinPopup = document.getElementById("signin-popup");
const closePopup = document.getElementById("close-popup");
const signInButton = document.querySelector('.Navbar__S3__button2');

signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    signinPopup.classList.remove('hidden');
    body.classList.add('popup-active');
});

closePopup.addEventListener('click', () => {
    signinPopup.classList.add('hidden');
    body.classList.remove('popup-active');
});

// Sign-in form submission and success message with email
document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById("signin-email").value;
    
    // Successful login action: Hide sign-in popup, change the navbar button, and show success alert
    signinPopup.classList.add('hidden');
    body.classList.remove('popup-active');
    signInButton.style.display = 'none';  // Hide "Sign In" button in the navbar after login
    
    // Show alert with the email entered
    alert(`Signed in successfully with email: ${emailInput}`);
});

// Select necessary elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Open the side menu when hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('show'); // Add class to show side menu
});

// Close the side menu when the close button is clicked
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('show'); // Remove class to hide side menu
});

// Get elements
const formOriginal = document.getElementById('contactFormOriginal');
const popupModalOriginal = document.getElementById('popupModalOriginal');
const popupMessageOriginal = document.getElementById('popupMessageOriginal');
const closePopupOriginal = document.getElementById('closePopupOriginal');

// Form submission event listener
formOriginal.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const nameOriginal = document.getElementById('nameInputOriginal').value.trim();
    const emailOriginal = document.getElementById('emailInputOriginal').value.trim();
    const phoneOriginal = document.getElementById('phoneInputOriginal').value.trim();
    const messageOriginal = document.getElementById('messageInputOriginal').value.trim();

    // Simple form validation
    if (nameOriginal === "" || emailOriginal === "" || phoneOriginal === "" || messageOriginal === "") {
        alert('Please fill in all the fields');
    }else {
        // Show the popup with personalized message
        popupMessageOriginal.innerHTML = `Hi ${nameOriginal}!<br>Thank you for contacting <strong>Nostra</strong>.<br>We will get back to you shortly.`;
        
        // Apply style directly to the popupMessageOriginal element
        popupMessageOriginal.style.fontSize = '16px';
        
        popupModalOriginal.style.display = 'block';
    
        // Optional: Clear the form after submission
        formOriginal.reset();
    }
});

// Close the popup when the user clicks the "x"
closePopupOriginal.addEventListener('click', function () {
    popupModalOriginal.style.display = 'none';
});

// Close the popup when the user clicks outside the modal
window.addEventListener('click', function (e) {
    if (e.target === popupModalOriginal) {
        popupModalOriginal.style.display = 'none';
    }
});
