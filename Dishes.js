const dishes = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "Gazpacho.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "Mushroom.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "Norwegian.jpg",
        kind: "fish"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "Ramen.jpg",
        kind: "meat"
    },
    {
        keyword: "tom_yan",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "tom_yan.JPG",
        kind: "fish"
    },
    {
        keyword: "chicken",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "Chicken.jpg",
        kind: "meat"
    },
    {
        keyword: "margarita",
        name: "Пицца маргарита",
        price: 700,
        category: "main",
        count: "500 г",
        image: "margarita.jpg",
        kind: "veg"
    },
    {
        keyword: "meat",
        name: "Пицца мясное ассорти",
        price: 800,
        category: "main",
        count: "550 г",
        image: "meat.jpg",
        kind: "meat"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main",
        count: "310 г",
        image: "Lasagna.jpg",
        kind: "veg"
    },
    {
        keyword: "pasta",
        name: "Паста с креветками",
        price: 340,
        category: "main",
        count: "280 г",
        image: "Pasta.jpg",
        kind: "fish"
    },
    {
        keyword: "fish_cutlets",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main",
        count: "270 г",
        image: "fish_cutles.jpg",
        kind: "fish"
    },
    {
        keyword: "potato",
        name: "Жаренная кортошка",
        price: 225,
        category: "main",
        count: "280 г",
        image: "Potato.jpg",
        kind: "meat"
    },
    {
        keyword: "korean",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salat",
        count: "250 г",
        image: "korean.jpg",
        kind: "veg"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыпленком",
        price: 370,
        category: "salat",
        count: "220 г",
        image: "caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salat",
        count: "235 г",
        image: "caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "tune",
        name: "Салат с тунцом",
        price: 480,
        category: "salat",
        count: "250 г",
        image: "tune.jpg",
        kind: "fish"
    },
    {
        keyword: "french_fri_caesar",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salat",
        count: "235 мл",
        image: "french_fri_caesar.jpg",
        kind: "veg"
    },
    {
        keyword: "french_fri_ketchup",
        name: "Картофель фри с соусом кетчупом",
        price: 260,
        category: "salat",
        count: "235 мл",
        image: "french_fri_ketchup.jpg",
        kind: "veg"
    },
    {
        keyword: "orange",
        name: "Апельсиновый сок",
        price: 120,
        category: "drink",
        count: "300 мл",
        image: "Orange.jpg",
        kind: "cold"
    },
    {
        keyword: "apple",
        name: "Яблочный сок",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "Apple.jpg",
        kind: "cold"
    },
    {
        keyword: "carrot",
        name: "Морковный сок",
        price: 110,
        category: "drink",
        count: "300 мл",
        image: "Carrot.jpg",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "drink",
        count: "300 мл",
        image: "cappuccino.jpg",
        kind: "hot"
    },
    {
        keyword: "green",
        name: "Зеленый чай",
        price: 100,
        category: "drink",
        count: "300 мл",
        image: "green_tea.jpg",
        kind: "hot"
    },
    {
        keyword: "black",
        name: "Черный чай",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "black_tea.jpg",
        kind: "hot"
    },
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "desert",
        count: "300 гр",
        image: "baklava.jpg",
        kind: "small"
    },
    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 240,
        category: "desert",
        count: "125 гр",
        image: "cheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolate_cheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "desert",
        count: "125 гр",
        image: "chocolate_cheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolate_cake",
        name: "Шоколадный торт",
        price: 270,
        category: "desert",
        count: "140 гр",
        image: "chocolate_cake.jpg",
        kind: "medium"
    },
    {
        keyword: "donuts_3",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "desert",
        count: "350 гр",
        image: "donuts_3.jpg",
        kind: "medium"
    },
    {
        keyword: "donuts_6",
        name: "Пончики (6 штук)",
        price: 650,
        category: "desert",
        count: "700 мл",
        image: "donuts.jpg",
        kind: "big"
    }
];

