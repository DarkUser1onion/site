const products = [
    {
        id: 1,
        name: 'Wi-Fi адаптер AR9271',
        price: 1990,
        image: 'images/ar9271.png',
        sku: 'AR9271-USB',
        category: 'adapter',
        description: 'WiFi адаптер Atheros AR9271 на современном чипе AR9271, предназначен для подключения компьютеров или совместимых ресиверов к беспроводной Wi-Fi сети на скорости до 150 Мбит. Пожалуйста уточняйте совместимость чипа адаптера с вашим оборудованием на сайте производителя.'
    },
    {
        id: 2,
        name: 'Книга "Сети глазами хакера"',
        price: 1890,
        image: 'images/book.png',
        sku: 'BK-ETHERNET',
        category: 'book',
        description: 'В книге рассматриваются вопросы безопасности компьютерных сетей. Даны практические рекомендации по проведению пентеста сетей Cisco, приведены полезные сведения о протоколе DTP от компании Cisco Systems, представлено подробное руководство по пентесту канального уровня сети, тестированию безопасностии и защите устройств MikroTik. Рассказывается о методах проведения пентестов с минимальным ущербом для сетевой инфраструктуры. Даны советы по эффективному использованию в процессе тестирования на проникновение инструментария Kali Linux, , рассказано об использовании виртуальных машин для постэксплуатации систем. Описаны рекомендации по защите сетевой инфраструктуры от хакерских атак. Практические примеры демонстрируют техники пентеста как для атакующей, так и для защищающейся стороны. Электронный архив на сайте издательства содержит  цветные иллюстрации к книге .'
    },
    {
        id: 3,
        name: 'Футболка с логотипом Arch Linux',
        price: 1290,
        image: 'images/tshirt.png',
        sku: 'arch_x86-64',
        category: 'merch',
        description: '100% хлопок, плотность 155 г/м2. Классический фасон. Воротник из хлопка с лайкрой для большего удобства и сохранения формы. Печать экологичными красками (сертифицированы по стандарту OEKO-TEX®). Пожалуйста, сверьтесь с таблицей размеров при выборе размера. Футболка с принтом Arch Linux от дизайнера Falcon22. Мужские футболки, поло с печатью - оригинальный подарок, отличное приобретение для себя или же классный мерч. При желании, предмет можно персонализировать. Быстрая доставка по Москве и России.'
    },
    {
        id: 4,
        name: 'Wi-Fi адаптер Ralink RT3070',
        price: 2200,
        image: 'images/rt3070.png',
        sku: 'RT3070-USB',
        category: 'adapter',
        description: 'USB-устройство для подключения к беспроводным сетям, работающее на чипсете Ralink RT3070. Он поддерживает стандарты 802.11b/g/n и обеспечивает скорость до 150 Мбит/с. Адаптер совместим с различными операционными системами, включая Windows, Linux и Mac OS'
    },
    {
        id: 5,
        name: 'Alfa AWUS036ACH',
        price: 3500,
        image: 'images/alfa-awus036ach.png',
        sku: 'ALFA-ACH',
        category: 'adapter',
        description: 'AWUS036ACS — двухдиапазонный WIFI адаптер ALFA NETWORK USB 2.0, работающий В частотных диапазонах 2400–2483,5 МГЦ SISO 1X1 И 5150–5875 МГЦ SISO 1X1 С поддержкой стандартов беспроводной связи 802.11A/B/G/N/AC, способный достигать совокупной пропускной спос.'
    },
    {
        id: 6,
        name: 'Антенна 5dBi Omni',
        price: 890,
        image: 'images/antenna-5dbi.png',
        sku: 'ANT-5DBI',
        category: 'adapter',
        description: 'Эта всенаправленная широкополосная антенна существенно улучшит качество приема 3G и 4G сигнала для вашего роутера, модема или другого устройства. Она работает на частотах 824-960 МГц (GSM/UMTS), 1710-2170 МГц (3G/LTE) и 2300-2690 МГц (LTE), обеспечивая широкий охват.'
    },
    {
        id: 7,
        name: 'Panda PAU09',
        price: 7100,
        image: 'images/panda-pau09.png',
        sku: 'PANDA-09',
        category: 'adapter',
        description: 'Работает с любыми сетями 802.11 a/ac/b/g/n 2,4 ГГц и 5 ГГц. Максимальная скорость беспроводного соединения: 300 Мбит/с. Поддерживает как инфраструктурный, так и ad-hoc режимы. Безопасность: WEP 64/128 бит, WPA, WPA2, 802.1x и 802.11i, Cisco CCS V1.0, 2.0 и 3.0. Поддержка нескольких ОС: 32-битные и 64-битные Windows XP/Vista/7/8/10, MX Linux, Manjaro, Linux Mint, Ubuntu, Lubuntu, OpenSUSE, RedHat, Fedora, CentOS, Kali Linux, Raspbian. Поддержка Mac для Panda Wireless PAU09 отсутствует. Адаптер Panda Wireless PAU09 предназначен для работы на ПК на базе Intel/AMD или Raspberry Pi 0/1/2/3/4. Он не работает с цифровыми медиаплеерами, цифровыми видеорегистраторами, сетевыми накопителями, PlayStation, камерами видеонаблюдения и т. д. Если вы хотите использовать Panda Wireless PAU09 на системах, отличных от Intel/AMD, обратитесь в компанию Panda Wireless. Если вы хотите использовать Panda Wireless PAU09 с гостевой ОС, например Kali, в виртуальной машине, обратитесь в компанию Panda Wireless за дополнительной информацией. В целом, мы рекомендуем нашим клиентам использовать Panda Wireless PAU09 на компьютере с поддерживаемой операционной системой из приведенного выше списка.'
    },
    {
        id: 8,
        name: 'Metasploit: The Penetration Tester\'s Guide',
        price: 2900,
        image: 'images/book-metasploit.png',
        sku: 'BK-METASPLOIT',
        category: 'book',
        description: '«Metasploit: The Penetration Tester’s Guide» (авторы: David Kennedy, Jim O’Gorman, Devon Kearns, Mati Aharoni; издательство No Starch Press, 2011 г., 328 стр.) — практическое руководство по работе с Metasploit Framework, одним из ключевых инструментов в сфере тестирования на проникновение (penetration testing). Издание последовательно проводит читателя от базовых понятий до продвинутых техник, показывая, как эффективно использовать Metasploit для разведки и сбора информации о целевой системе, поиска и эксплуатации уязвимостей, обхода антивирусных решений и средств контроля безопасности, автоматизации обнаружения с помощью интеграции с Nmap, NeXpose и Nessus, проведения атак изнутри сети с использованием оболочки Meterpreter, разработки собственных модулей и скриптов для постэксплуатации, исследования нулевых дней (zero‑day) и написания фаззеров, переноса существующих эксплойтов в Metasploit Framework, а также для скрытия следов деятельности.'
    },
    {
        id: 9,
        name: 'Thinkpad L15',
        price: 40000,
        image: 'images/Thinkpad-L15.png',
        sku: 'LT-LENOVO',
        category: 'adapter',
        description: 'модель бизнес-ноутбука из серии ThinkPad. Подходит для повседневной работы, работы в офисе и за его пределами.'
    },
    {
        id: 10,
        name: 'Linux для хакера',
        price: 700,
        image: 'images/book-linux.png',
        sku: 'BK-LINUX',
        category: 'book',
        description: 'Рассмотрены вопросы настройки ОС Linux на максимальную производительность и безопасность. Описано базовое администрирование и управление доступом, настройка Firewall, файлообменный сервер, WEB-, FTP- и Proxy-сервера, программы для доставки электронной почты, службы DNS, а также политика мониторинга системы и архивирование данных. Приведены потенциальные уязвимости, даны рекомендации по предотвращению возможных атак и показано, как действовать при атаке или взломе системы, чтобы максимально быстро восстановить ее работоспособность и предотвратить потерю данных. В седьмом издании обновлена информация с учетом последней LTS-версии Ubuntu и добавлено больше примеров обеспечения безопасности Linux, поиска уязвимостей, в том числе и в веб-приложениях.'
    },
    {
        id: 11,
        name: 'Футболка для мужиков"',
        price: 3200,
        image: 'images/hoodie-sniffer.png',
        sku: 'i-use-c-btw',
        category: 'merch',
        description: 'C++ - обычный надежный меч, которым можно хоть че рубить. Java - острая катана, который можно что-то хорошо разрубить, но если сделать это плохо - то ей хана. Python - такой навореченый меч, который работает на батарейках (либах), рукоятка взята из меча C++, вроде норм, но как ты хлеб нарежешь им? С - бегите, я еб@ут@й'
    },
    {
        id: 12,
        name: 'Кепка "tux"',
        price: 1500,
        image: 'images/cap-tux.png',
        sku: 'cap-tux',
        category: 'merch',
        description: 'Кепка с вышитым рисунком пингвин TUX выполнена из хлопка, что делает ее прочной и долговечной. Также кепка имеет регулируемый ремешок, что позволяет ее идеально подогнать под любой размер головы.'
    },
    {
        id: 13,
        name: 'Твоя жизнь',
        price: 6666666666,
        image: 'images/lain-lain-iwakura.gif',
        sku: 'u-dont',
        category: 'merch',
        description: 'Система как продолжение сознания. Каждый конфиг — это мысль, записанная в код.'
    },
    {
        id: 14,
        name: 'Raspberry Pi Zero W',
        price: 3800,
        image: 'images/rpi-zero.png',
        sku: 'rp-zero-w',
        category: 'adapter',
        description: 'Расберри пай зеро В - это миниатюрный одноплатный компьютер, разработанный компанией Raspberry Pi Foundation. Он представляет собой удивительно компактное и доступное устройство, идеально подходящее для различных проектов, включая электронику, автоматизацию, робототехнику и интернет вещей (IoT). Вот основные характеристики и особенности Raspberry Pi Zero W:'
    },
    {
        id: 15,
        name: 'USB Rubber Ducky',
        price: 8500,
        image: 'images/rubber-ducky.png',
        sku: 'digispark-origin',
        category: 'adapter',
        description: 'Оригинальный USB-адаптер HAK5 Rubber Ducky из США — незаменимый инструмент для сетевой безопасности, позволяющий без труда внедрять команды с клавиатуры! Эффективное внедрение команд с клавиатуры: использование функции симуляции клавиатуры для быстрого выполнения сложных команд, экономия времени и усилий. Простота программирования: поддержка пользовательских скриптов, позволяющая пользователям свободно создавать и запускать задачи в соответствии со своими потребностями. Компактность и портативность: миниатюрный дизайн, легко носить с собой, удовлетворяет ваши потребности в сетевой безопасности в любое время и в любом месте. Профессиональные инструменты безопасности: разработан специально для тестирования на проникновение и анализа сетевой безопасности, помогая выявлять и устранять уязвимости. Мощная поддержка сообщества: HAK5 имеет активное сообщество пользователей, предоставляющее богатые ресурсы и техническую поддержку для облегчения обучения и практики. Тестирование на проникновение в сеть: эксперты по безопасности используют USB-адаптер Rubber Ducky для тестирования на проникновение, чтобы оценить безопасность системы и выявить потенциальные уязвимости. Автоматизированное выполнение задач: пользователи могут легко автоматизировать операции скриптов с помощью Dahuang Duck, экономя время и повышая эффективность. Обучение и подготовка: на курсах обучения сетевой безопасности инструкторы используют Big Yellow Duck для демонстрации студентам методов атаки и стратегий защиты. Проверка безопасности персональных устройств: Обычные пользователи используют Dahuang Duck для проверки безопасности домашней сети и повышения своего понимания сетевой безопасности. Быстрая демонстрация настройки: Во время технических конференций докладчики могут использовать Dahuangya для быстрого развертывания предварительно заданных сценариев и повышения эффективности демонстрации. Управление системой: ИТ-администраторы используют USB Rubber Ducky для быстрого выполнения задач управления системой и упрощения повседневных операций.'
    },
    {
        id: 16,
        name: 'Очки погружения в сеть',
        price: 0,
        image: 'images/glass.gif',
        sku: 'glass-neo',
        category: 'merch',
        description: 'Очки в «Матрице» — не просто стильный аксессуар. Они в том числе подчёркивают разницу между цифровым и реальным мирами. В виртуальной реальности персонажи выглядят эффектно: кожаные плащи, тёмные очки, оружие, мотоциклы. В Матрице всё идеально выверено, даже пафосно.'
    },
    {
        id: 17,
        name: 'Linux API. Исчерпывающее руководство',
        price: 5260,
        image: 'images/cheatsheet.png',
        sku: 'linux-api',
        category: 'book',
        description: 'Linux Programming Interface – исчерпывающее руководство по программированию приложений для Linux и UNIX. Описанный здесь интерфейс применяется практически с любыми приложениями, работающими в операционных системах Linux или UNIX. В этой авторитетной книге эксперт по Linux Майкл Керриск, долгое время отвечавший за наполнение справочного ресурса man pages, подробно описывает библиотечные вызовы и библиотечные функции, которые понадобятся вам при системном программировании в Linux. Книга содержит множество продуманных полнофункциональных программ, доступно иллюстрирующих все теоретические концепции.'
    }
];

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