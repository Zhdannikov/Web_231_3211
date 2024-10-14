// 2. Реализуйте отображение блюд на страницу с помощью JavaScript.
// Необходимо написать скрипт, который будет перебирать массив с блюдами и выводить каждое из них в нужную секцию. Секции должны выглядеть также, 
// как при статичном выводе из прошлых лабораторных.
// - У каждого блока с блюдом должен быть data-атрибут "data-dish", в котором будет храниться название блюда на латинице.

// добавляем обработчик событий и определяем переменные для секций
document.addEventListener("DOMContentLoaded", () => {
    const soupSection = document.querySelector("#soup-section .dishes");
    const mainSection = document.querySelector("#main-section .dishes");
    const drinkSection = document.querySelector("#drink-section .dishes");



    // 5.Отсортируйте блюда каждой категории в алфавитном порядке.
    // - Используйте метод sort() перед отображением блюд на страницу. Блюда должны быть отсортированы в алфавитном порядке.
    // сортируем массив объектов dishes по алфавиту по name 
    dishes.sort((a, b) => a.name.localeCompare(b.name));




    dishes.forEach(dish => { // проходим по каждому объекту в массиве
        const dishElement = document.createElement("div");// создает новый элемент div для каждого блюда
        dishElement.classList.add("dish");// добавляет класс dish  к новому элементу
        dishElement.setAttribute("data-dish", dish.keyword);// устанавливает арибует data-dish

        //заплняем элементы блюда информацией 
        dishElement.innerHTML = ` 
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-info">
                <p class="price">${dish.price}₽</p>
                <p class="name">${dish.name}</p>
                <p class="weight">${dish.count}</p>
                <button class="add">Добавить</button>
            </div>
        `;
// добавление элемента блюда в нужную секцию
        if (dish.category === "soup") {
            soupSection.appendChild(dishElement);
        } else if (dish.category === "main") {
            mainSection.appendChild(dishElement);
        } else if (dish.category === "drink") {
            drinkSection.appendChild(dishElement);
        }
    });

    //определение элементов формы заказа
    const orderForm = {
        soup: document.getElementById("selected-soup"),
        main: document.getElementById("selected-main-dish"),
        drink: document.getElementById("selected-drink"),
        totalPrice: document.querySelector("#total-price .price-value")
    };
// инициалиируем выбранные блюда
    let selectedDishes = {
        soup: null,
        main: null,
        drink: null
    };



    
    //     4.Реализуйте подсчет итоговой стоимости для всех выбранных позиций меню.
    // После блоков с выбранными блюдами должен располагаться блок "Стоимость заказа".
    // В блоке отображается итоговая стоимость всех блюд. Например, если был выбран только напиток, отобразиться его цена:
// добавляем переменные
    const updateOrder = () => {
        let total = 0;
        let isAnyDishSelected = false;
// обновляем информацию о блюдах если блюдо выбрано то показана информация если нет то показано не выбрано 
        for (let category in selectedDishes) {
            if (selectedDishes[category]) {
                orderForm[category].textContent = `${selectedDishes[category].name} ${selectedDishes[category].price}₽`;
                total += selectedDishes[category].price;
                isAnyDishSelected = true;
            } else {
                orderForm[category].textContent = "Не выбрано";
            }
        }
// определение элементов для отображения сообщений и блоков заказа
        const noSelectionMessage = document.getElementById("no-selection-message");
        const soupOrder = document.getElementById("soup-order");
        const mainOrder = document.getElementById("main-order");
        const drinkOrder = document.getElementById("drink-order");
        const totalPriceBlock = document.getElementById("total-price-block");

        //отображение или скрытие элементов в зависимости выбрано блюдо или нет
        if (!isAnyDishSelected) {
            noSelectionMessage.style.display = 'block';
            soupOrder.style.display = 'none';
            mainOrder.style.display = 'none';
            drinkOrder.style.display = 'none';
            totalPriceBlock.style.display = 'none';
        } else {
            noSelectionMessage.style.display = 'none';
            soupOrder.style.display = 'block';
            mainOrder.style.display = 'block';
            drinkOrder.style.display = 'block';
            totalPriceBlock.style.display = 'block';
            orderForm.totalPrice.textContent = `${total}₽`;
        }
    };



    //     3. Создайте скрипт, позволяющий выбрать блюдо и добавить его в форму "Сделать заказ".
    // - При клике на карточку с блюдом, его название и цена должны появляться в разделе формы "Ваш заказ". Блюдо должно отображаться в своей категории.
    // - Используйте data-атрибут, чтобы найти блюдо в массиве.
    // обрабатывает события для каждого элемента чтобы обновлять заказ
    document.querySelectorAll(".dish").forEach(dishElement => {
        dishElement.addEventListener("click", (event) => {
            const dishKeyword = dishElement.getAttribute("data-dish");
            const dish = dishes.find(d => d.keyword === dishKeyword);

            if (dish) {
                selectedDishes[dish.category] = dish;
                updateOrder();
            }
        });
    });
});
