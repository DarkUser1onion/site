import products from './product.js'
import { updateCartCounter, saveCart, addToCart, removeFromCart, changeQuantity, openProductModal, closeAllModals,  } from './script.js'

function renderProducts(filter = 'all')
{
    if (!productsGrid) return;
        productsGrid.innerHTML = '';

    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price} ₽</p>
            <p class="product-sku">Арт: ${product.sku}</p>
            <button class="add-to-cart-btn submit-btn">[ В КОРЗИНУ ]</button>
        `;
        productsGrid.appendChild(card);
    });
}

function renderCartModal()
{
    if (!cartItemsContainer || !cartTotalSpan) return;
    cartItemsContainer.innerHTML = '';
    let total = 0;

    for (const productId in cart)
    {
        const product = products.find(p => p.id == productId);
        if (!product)
            continue; // на случай, если товар удалён из каталога

        const item = cart[productId];
        const itemTotal = product.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <span>${product.name}</span>
            <span>${item.quantity} шт.</span>
            <span>${itemTotal} ₽</span>
            <div>
                <button class="cart-plus submit-btn" data-id="${productId}">+</button>
                <button class="cart-minus submit-btn" data-id="${productId}">-</button>
                <button class="cart-remove submit-btn" data-id="${productId}">Удалить</button>
            </div>
        `;
        cartItemsContainer.appendChild(row);
    }

    cartTotalSpan.textContent = `Итого: ${total} ₽`;
}