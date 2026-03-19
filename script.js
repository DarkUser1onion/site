import products from './product.js'
import {renderProducts, renderCartModal} from './renders.js'

let cart = {};

if (localStorage.getItem('cart'))
    cart = JSON.parse(localStorage.getItem('cart'));

const productsGrid = document.getElementById('products-grid');
const cartCountSpan = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const filterButtons = document.querySelectorAll('[data-filter]');

function updateCartCounter()
{
    const totalCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountSpan) cartCountSpan.textContent = totalCount;
}

function saveCart()
{
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    if (cartModal.style.display === 'block')
        renderCartModal();
}

function addToCart(productId)
{
    if (cart[productId]) 
        cart[productId].quantity += 1;
    else 
        cart[productId] = { quantity: 1 };
    
    saveCart();
}

function removeFromCart(productId)
{
    delete cart[productId];
    saveCart();
}

function changeQuantity(productId, delta)
{
    if (!cart[productId])
        return;

    cart[productId].quantity += delta;

    if (cart[productId].quantity <= 0)
        delete cart[productId];
    
    saveCart();
}

function openProductModal(productId)
{
    const product = products.find(p => p.id == productId);
    if (!product || !productModal)
        return;

    const detailContainer = document.getElementById('modal-product-detail');
    detailContainer.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="max-width:100%; max-height:300px; object-fit:contain;">
        <h2>${product.name}</h2>
        <p><strong>Цена:</strong> ${product.price} ₽</p>
        <p><strong>Артикул:</strong> ${product.sku}</p>
        <p><strong>Описание:</strong> ${product.description}</p>
        <button class="add-to-cart-btn submit-btn" data-id="${product.id}">[ В КОРЗИНУ ]</button>
    `;
    productModal.style.display = 'block';
}

function closeAllModals()
{
    if (cartModal) cartModal.style.display = 'none';
    if (productModal) productModal.style.display = 'none';
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

if (productsGrid)
{
    productsGrid.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('add-to-cart-btn'))
        {
            const card = target.closest('.product-card');
            if (card)
                addToCart(card.dataset.id);
            
        }

        if (target.classList.contains('product-title') || target.classList.contains('product-img'))
        {
            const card = target.closest('.product-card');
            if (card)
                openProductModal(card.dataset.id);
        }
    });
}

const cartTrigger = document.getElementById('cart-trigger');
if (cartTrigger)
{
    cartTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        renderCartModal();
        if (cartModal)
            cartModal.style.display = 'block';
    });
}

if (cartItemsContainer)
{
    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const productId = target.dataset.id;
        if (!productId)
            return;

        if (target.classList.contains('cart-plus'))
        {
            changeQuantity(productId, 1);
            renderCartModal(); // обновляем отображение
        }
        if (target.classList.contains('cart-minus'))
        {
            changeQuantity(productId, -1);
            renderCartModal();
        }
        if (target.classList.contains('cart-remove'))
        {
            removeFromCart(productId);
            renderCartModal();
        }
    });
}

document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeAllModals);
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) 
        closeAllModals();

});

if (productModal)
{
    productModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn'))
        {
            const productId = e.target.dataset.id;
            if (productId)
            {
                addToCart(productId);
                productModal.style.display = 'none';
            }
        }
    });
}

const checkoutBtn = document.querySelector('#cart-modal .submit-btn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (confirm('Оформить заказ? Корзина будет очищена.'))
        {
            cart = {};
            saveCart();
            renderCartModal();
            cartModal.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartCounter();

    if (filterButtons.length) {
        filterButtons[0].classList.add('active');
    }
});
