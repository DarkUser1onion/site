export function renderProducts(products, container, filter = 'all')
{
    if (!container) return;
    container.innerHTML = '';

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
        container.appendChild(card);
    });
}

export function renderCartModal(cart, products, container, totalSpan)
{
    if (!container || !totalSpan) return;
    container.innerHTML = '';
    let total = 0;

    for (const productId in cart)
    {
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
            <div>
                <button class="cart-plus submit-btn" data-id="${productId}">+</button>
                <button class="cart-minus submit-btn" data-id="${productId}">-</button>
                <button class="cart-remove submit-btn" data-id="${productId}">Удалить</button>
            </div>
        `;
        container.appendChild(row);
    }

    totalSpan.textContent = `Итого: ${total} ₽`;
}