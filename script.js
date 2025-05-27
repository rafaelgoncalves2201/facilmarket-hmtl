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

document.addEventListener('DOMContentLoaded', function() {
            const quantityInput = document.getElementById('quantity');
            const decreaseBtn = document.getElementById('decrease');
            const increaseBtn = document.getElementById('increase');
            const addToCartBtn = document.querySelector('.add-to-cart');

            // Quantity controls
            decreaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });

            increaseBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value);
                if (value < 10) {
                    quantityInput.value = value + 1;
                }
            });

            // Add to cart animation
            addToCartBtn.addEventListener('click', function() {
                const quantity = parseInt(quantityInput.value);
                const productName = document.querySelector('h1').textContent;
                const price = document.querySelector('.text-4xl').textContent;

                // Animation effect
                addToCartBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Adicionado!';
                addToCartBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                addToCartBtn.classList.add('bg-green-500', 'hover:bg-green-600');

                setTimeout(() => {
                    addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i> Adicionar ao carrinho';
                    addToCartBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                    addToCartBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
                }, 2000);

                // In a real app, you would send this data to your backend
                console.log(`Produto: ${productName}, Quantidade: ${quantity}, Preço: ${price}`);
            });

            // Color selection
            const colorButtons = document.querySelectorAll('button.w-8.h-8');
            colorButtons.forEach(button => {
                button.addEventListener('click', function() {
                    colorButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-blue-500'));
                    this.classList.add('ring-2', 'ring-blue-500');
                });
            });
        });

// JavaScript para funcionalidades do carrinho
        document.addEventListener('DOMContentLoaded', function() {
            // Selecionar elementos
            const removeButtons = document.querySelectorAll('.remove-btn');
            const minusButtons = document.querySelectorAll('.quantity-btn:first-child');
            const plusButtons = document.querySelectorAll('.quantity-btn:last-child');
            const cartItems = document.getElementById('cart-items');
            const emptyCart = document.getElementById('empty-cart');
            const cartCount = document.getElementById('cart-count');
            
            // Contador de itens no carrinho
            let itemCount = 3;
            
            // Função para atualizar contador
            function updateCartCount() {
                cartCount.textContent = itemCount;
                if (itemCount === 0) {
                    cartItems.classList.add('hidden');
                    emptyCart.classList.remove('hidden');
                    cartCount.classList.add('hidden');
                } else {
                    cartItems.classList.remove('hidden');
                    emptyCart.classList.add('hidden');
                    cartCount.classList.remove('hidden');
                }
            }
            
            // Remover item do carrinho
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const item = this.closest('.cart-item');
                    item.classList.add('opacity-0', 'h-0', 'overflow-hidden', 'mb-0');
                    setTimeout(() => {
                        item.remove();
                        itemCount--;
                        updateCartCount();
                    }, 300);
                });
            });
            
            // Diminuir quantidade
            minusButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const quantityElement = this.nextElementSibling;
                    let quantity = parseInt(quantityElement.textContent);
                    if (quantity > 1) {
                        quantity--;
                        quantityElement.textContent = quantity;
                    }
                });
            });
            
            // Aumentar quantidade
            plusButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const quantityElement = this.previousElementSibling;
                    let quantity = parseInt(quantityElement.textContent);
                    quantity++;
                    quantityElement.textContent = quantity;
                });
            });
            
            // Botão de finalizar compra
            const checkoutBtn = document.querySelector('.checkout-btn');
            checkoutBtn.addEventListener('click', function() {
                alert('Compra finalizada com sucesso! Obrigado por comprar conosco.');
                // Aqui você pode adicionar a lógica para limpar o carrinho
                cartItems.querySelectorAll('.cart-item').forEach(item => item.remove());
                itemCount = 0;
                updateCartCount();
            });
        });
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Aqui você adicionaria a lógica de autenticação
            console.log('Login attempt:', { email, password });
            
            // Simulação de login bem-sucedido
            alert('Login realizado com sucesso!');
        });