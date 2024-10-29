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

// Get all filter checkboxes
const filters = document.querySelectorAll('.filter-group input[type="checkbox"]');

// Get the container holding all product cards
const productsContainer = document.querySelector('.product-container'); // Assuming a container element for products

// Get all product cards and category titles
const productCards = document.querySelectorAll('.product-card');
const categoryTitles = document.querySelectorAll('.category-title'); // Assuming each title has this class

// Function to filter the products
function filterProducts() {
    // Get selected filters
    const selectedFilters = Array.from(filters)
        .filter(filter => filter.checked)
        .map(filter => filter.getAttribute('data-category')); // Use data-category directly

    // Show or hide products and titles based on selected filters
    let isFilterActive = selectedFilters.length > 0;

    productCards.forEach(card => {
        const category = card.getAttribute('data-category');

        // If no filters are selected, show all products and all titles
        if (!isFilterActive || selectedFilters.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Update category titles visibility
    categoryTitles.forEach(title => {
        const titleCategory = title.getAttribute('data-category'); // Assuming title has data-category attribute
        const isCategoryVisible = selectedFilters.includes(titleCategory) || !isFilterActive;

        if (isCategoryVisible) {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
    });

    // Toggle grid layout based on filter activity
    if (isFilterActive) {
        productsContainer.classList.add('filtered-grid');
    } else {
        productsContainer.classList.remove('filtered-grid');
    }
}

// Attach event listeners to all filter checkboxes
filters.forEach(filter => {
    filter.addEventListener('change', filterProducts);
});

// Initial call to display all products and titles
filterProducts();


// Get the search input, search button, product cards, and no results message
const searchInput = document.querySelector('.Search__Input');
const searchButton = document.querySelector('.Search__Button');
const productCard = document.querySelectorAll('.product-card'); // Corrected variable name
const noResultsMessage = document.getElementById('no-results');
const productContainer = document.querySelector('.product-container'); // Corrected variable name
const filterContainer = document.querySelector('.filter-container');

// Function to handle search functionality
function searchProducts() {
    const query = searchInput.value.toLowerCase().trim();
    let hasResults = false; // Flag to check if there are any matching results

    // Show/hide products based on search query
    productCard.forEach(card => {
        const productTitle = card.getAttribute('title').toLowerCase(); // Get the product title
        // Check if the product title includes the search query
        if (productTitle.includes(query) && query !== "") {
            card.style.display = 'block'; // Show the product card
            hasResults = true; // Set the flag to true if there's a match
        } else {
            card.style.display = 'none'; // Hide the product card
        }
    });

    // Show or hide the no results message and product container
    if (!hasResults) {
        noResultsMessage.style.display = 'flex'; // Show message if no results
        noResultsMessage.style.justifyContent = 'center'; // Center horizontally
        noResultsMessage.style.alignItems = 'center'; // Center vertically
        noResultsMessage.style.height = '100vh'; // Full height for centering
        noResultsMessage.style.width = '100vw'; // Full width for centering
        noResultsMessage.style.height = '100vh'; // Optional: Full height centering
        productContainer.style.display = 'none'; // Hide product container if no results
        filterContainer.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'none'; // Hide message if there are results
        productContainer.style.display = 'block'; // Show product container if there are results

        filterContainer.style.display = 'none';
    }
}

// Attach event listener to the search button for click event
searchButton.addEventListener('click', searchProducts);

// Get both desktop and mobile search inputs and buttons
const searchInputDesktop = document.querySelector('.Search__Input');
const searchButtonDesktop = document.querySelector('.Search__Button');

const searchInputMobile = document.querySelector('.Mobile-Search__Input');
const searchButtonMobile = document.querySelector('.Mobile-Search__Button');

// Function to handle search functionality (shared by both search bars)
function searchProducts(input) {
    const query = input.value.toLowerCase().trim();
    let hasResults = false;

    // Show/hide products based on search query
    productCard.forEach(card => {
        const productTitle = card.getAttribute('title').toLowerCase();
        if (productTitle.includes(query) && query !== "") {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Show or hide the no results message and product container
    if (!hasResults) {
        noResultsMessage.style.display = 'block';
        noResultsMessage.style.justifyContent = 'center'; // Center horizontally
        noResultsMessage.style.alignItems = 'center'; // Center vertically
        noResultsMessage.style.height = '100vh'; // Full height for centering
        noResultsMessage.style.width = '100vw'; // Full width for centering
        noResultsMessage.style.height = '100vh'; // Optional: Full height centering
        productContainer.style.display = 'none';
        filterContainer.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'none';
        productContainer.style.display = 'block';
        productContainer.style.padding = '20px'; // Add padding to the product container
        filterContainer.style.display = 'none';
    }
}

// Attach event listeners for both search buttons
searchButtonDesktop.addEventListener('click', () => searchProducts(searchInputDesktop));
searchButtonMobile.addEventListener('click', () => searchProducts(searchInputMobile));

// Adjust popup display to ensure it appears and save product details to localStorage
function addToCart(productName, productPrice, productImage) {
    const popup = document.getElementById('cart-popup');
    popup.textContent = `${productName} added to cart successfully`;
    popup.style.display = 'block';

    // Get existing cart items from localStorage or initialize an empty array if none exist
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new product to the cart items array
    cartItems.push({
        name: productName,
        price: productPrice,
        image: productImage
    });

    // Save updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}