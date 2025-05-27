// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Vendor panel tabs
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Deactivate all tab buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-gray-800');
        });
        
        // Show selected tab content
        document.getElementById(tabId).classList.add('active');
        
        // Activate clicked button
        this.classList.add('bg-gray-800');
    });
});

// Product management
const addProductBtn = document.getElementById('add-product-btn');
const addProductForm = document.getElementById('add-product-form');
const cancelProductBtn = document.getElementById('cancel-product-btn');

addProductBtn.addEventListener('click', function() {
    addProductForm.classList.remove('hidden');
});

cancelProductBtn.addEventListener('click', function() {
    addProductForm.classList.add('hidden');
});

// Service management
const addServiceBtn = document.getElementById('add-service-btn');
const addServiceForm = document.getElementById('add-service-form');
const cancelServiceBtn = document.getElementById('cancel-service-btn');

addServiceBtn.addEventListener('click', function() {
    addServiceForm.classList.remove('hidden');
});

cancelServiceBtn.addEventListener('click', function() {
    addServiceForm.classList.add('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// compra 