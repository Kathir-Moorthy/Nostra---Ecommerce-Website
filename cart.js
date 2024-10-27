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

// Cart Module - Encapsulate within an IIFE to prevent interference with other code
const CartModule = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        const cartContainer = document.getElementById('cart-container');

        // Retrieve cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        if (cartItems.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty</p>";
        } else {
            cartItems.forEach(item => {
                // Create HTML elements for each cart item
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');

                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>Price: ₹${item.price}</p>
                        <button class="remove-btn" data-product-name="${item.name}">Remove</button>
                    </div>
                `;
                cartContainer.appendChild(itemDiv);
            });

            // Attach event listeners to dynamically created remove buttons
            const removeButtons = document.querySelectorAll('.remove-btn');
            removeButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const productName = event.target.getAttribute('data-product-name');
                    confirmRemoveFromCart(productName);
                });
            });
        }
    });

    // Function to show confirmation popup before removing an item
    function confirmRemoveFromCart(productName) {
        // Create the popup container
        const popup = document.createElement('div');
        popup.classList.add('popup-cart');
        popup.innerHTML = `
            <div class="popup-cont">
                <button class="c-btn">×</button>
                <p>Are you sure you want to remove "${productName}"?</p>
                <button class="confirm-btn" data-product-name="${productName}">Yes</button>
                <button class="cancel-btn">No</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Add event listeners for the popup buttons
        popup.querySelector('.c-btn').addEventListener('click', closePopup);
        popup.querySelector('.confirm-btn').addEventListener('click', () => removeFromCart(productName));
        popup.querySelector('.cancel-btn').addEventListener('click', closePopup);
    }

    // Function to close the popup
    function closePopup() {
        const popup = document.querySelector('.popup-cart');
        if (popup) popup.remove();
    }

    // Function to remove item from cart
    function removeFromCart(productName) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems = cartItems.filter(item => item.name !== productName);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        closePopup();
        location.reload(); // Refresh the page to update the cart display
    }

    // Expose only necessary functions
    return {
        confirmRemoveFromCart,
        closePopup,
        removeFromCart
    };
})();