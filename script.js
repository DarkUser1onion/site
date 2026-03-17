const products = [
    {
        id: 1,
        name: 'Wi-Fi адаптер AR9271',
        price: 1990,
        image: 'images/ar9271.png',
        sku: 'AR9271-USB',
        category: 'adapter'
    },
];

function renderProducts(filter) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price} ₽</p>
            <p class="product-sku">Арт: ${product.sku}</p>
            <button class="add-to-cart-btn">[ В КОРЗИНУ ]</button>
        `;
        grid.appendChild(card);
    });
}


let cart = {};

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCounter();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    const totalCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}

function addToCart(productId) {
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { quantity: 1 };
    }
    saveCart();
}

function removeFromCart(productId) {
    delete cart[productId];
    saveCart();
}

function changeQuantity(productId, delta) {
    if (!cart[productId]) return;
    cart[productId].quantity += delta;
    if (cart[productId].quantity <= 0) {
        delete cart[productId];
    }
    saveCart();
}

document.getElementById('products-grid').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const card = e.target.closest('.product-card');
        addToCart(card.dataset.id);
    }
    if (e.target.classList.contains('product-title') || e.target.classList.contains('product-img')) {
        const card = e.target.closest('.product-card');
        openProductModal(card.dataset.id);
    }
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

function renderCartModal() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let total = 0;
    for (let productId in cart) {
        const product = products.find(p => p.id == productId);
        if (!product) continue;
        const item = cart[productId];
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <span>${product.name}</span>
            <span>${item.quantity} шт.</span>
            <span>${itemTotal} ₽</span>
            <button class="cart-plus" data-id="${productId}">+</button>
            <button class="cart-minus" data-id="${productId}">-</button>
            <button class="cart-remove" data-id="${productId}">Удалить</button>
        `;
        cartContainer.appendChild(row);
    }
    document.getElementById('cart-total').textContent = `Итого: ${total} ₽`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
});

function openProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    const modal = document.getElementById('product-modal');
    const detailContainer = document.getElementById('modal-product-detail');
    detailContainer.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="max-width:100%;">
        <h2>${product.name}</h2>
        <p>Цена: ${product.price} ₽</p>
        <p>Артикул: ${product.sku}</p>
        <p>Описание: Здесь можно добавить подробное описание товара.</p>
    `;
    modal.style.display = 'block';
}

document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

document.getElementById('cart-icon').addEventListener('click', () => {
    renderCartModal();
    document.getElementById('cart-modal').style.display = 'block';
});

document.getElementById('cart-items').addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-plus')) {
        changeQuantity(e.target.dataset.id, 1);
        renderCartModal();
    }
    if (e.target.classList.contains('cart-minus')) {
        changeQuantity(e.target.dataset.id, -1);
        renderCartModal();
    }
    if (e.target.classList.contains('cart-remove')) {
        removeFromCart(e.target.dataset.id);
        renderCartModal();
    }
});

if (document.getElementById('products-grid')) {
}
if (document.getElementById('cart-icon')) {
}