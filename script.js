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

window.onload = function() {
    var popup = document.getElementById("promoPopup");
    var closeBtn = document.getElementsByClassName("extraOfferPopup-close")[0];

    // Show the popup and blur the background
    popup.style.display = "block";
    document.body.classList.add("blurred");

    // When the user clicks on close button (X), hide the popup and remove blur
    closeBtn.onclick = function() {
        popup.style.display = "none";
        document.body.classList.remove("blurred");
    }

    // Close popup when clicking outside the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            document.body.classList.remove("blurred");
        }
    }
};

//sale image slider
// Select slider elements
const saleSlider = document.getElementById("sale-slider-images");
const prevSaleSlide = document.getElementById("prevSaleSlide");
const nextSaleSlide = document.getElementById("nextSaleSlide");

let currentSlide = 0;
const totalSlides = saleSlider.children.length;

// Move to the next slide
nextSaleSlide.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the first slide
    }
    updateSliderPosition();
});

// Move to the previous slide
prevSaleSlide.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    }
    updateSliderPosition();
});

// Update the slider position
function updateSliderPosition() {
    const slideWidth = saleSlider.children[0].offsetWidth;
    saleSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

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
document.getElementById("signin-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("signin-email").value;

    // Successful login action: Hide sign-in popup, change the navbar button, and show success alert
    signinPopup.classList.add('hidden');
    body.classList.remove('popup-active');
    signInButton.style.display = 'none';  // Hide "Sign In" button in the navbar after login

    // Show alert with the email entered
    alert(`Signed in successfully with email: ${emailInput}`);
});

// Function to handle slider scroll with looping for both 'next' and 'previous' buttons
function setupSlider(sliderContainer, prevButton, nextButton) {
    nextButton.addEventListener('click', () => {
        const sliderWidth = sliderContainer.clientWidth;
        const maxScrollLeft = sliderContainer.scrollWidth - sliderWidth;

        if (Math.ceil(sliderContainer.scrollLeft) >= maxScrollLeft) {
            // If at the last item, loop back to the start
            sliderContainer.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Otherwise, scroll to the next set of items
            sliderContainer.scrollBy({
                top: 0,
                left: sliderWidth,
                behavior: 'smooth'
            });
        }
    });

    prevButton.addEventListener('click', () => {
        const sliderWidth = sliderContainer.clientWidth;

        if (sliderContainer.scrollLeft <= 0) {
            // If at the first item, jump to the end
            sliderContainer.scrollTo({
                top: 0,
                left: sliderContainer.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            // Otherwise, scroll to the previous set of items
            sliderContainer.scrollBy({
                top: 0,
                left: -sliderWidth,
                behavior: 'smooth'
            });
        }
    });
}

// Apply the function to each slider
setupSlider(document.getElementById('product-slider'), document.getElementById('prevSlide'), document.getElementById('nextSlide'));
setupSlider(document.getElementById('product-slider1'), document.getElementById('prevSlide1'), document.getElementById('nextSlide1'));
setupSlider(document.getElementById('product-slider2'), document.getElementById('prevSlide2'), document.getElementById('nextSlide2'));

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
