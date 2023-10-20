const products = {

    Dania: [
        {
            id:"11",
            category: "Dania",
            title: "Danie 1",
            price: 24.99,
            description: "Kurczak sous-vide, sałata rzymska, pomidorki cherry, kapary, anchois, parmezan, grzanki, sos cezar",

        },
        {
            id:"12",
            category: "Dania",
            title: "Danie 2",
            price: 28.99,
            description: "Kurczak sous-vide, sałata rzymska, pomidorki cherry, kapary, anchois, parmezan, grzanki, sos cezar",
        },
        {
            id:"13",
            category: "Dania",
            title: "Danie 3",
            price: 32.99,
            description: "Kurczak sous-vide, sałata rzymska, pomidorki cherry, kapary, anchois, parmezan, grzanki, sos cezar",
        },
    ],

    Pizza: [
        {
            id:"21",
            category: "Pizza",
            title: "Pizza napoletana",
            price: 24.99,
            description: "Sos, ser",
        },
        {
            id:"22",
            category: "Pizza",
            title: "Pizza Bianca",
            price: 28.99,
            description: "Sos, ser",
        },
        {
            id:"23",
            category: "Pizza",
            title: "Pizza Pepperoni",
            price: 32.99,
            description: "Sos, ser",
        },
    ],

    
    Burgery: [
        {
            id:"31",
            category: "Burger",
            title: "Burger Vege",
            price: 24.99,
            description: "Bułka, mięso, sos",
        },
        {
            id:"32",
            category: "Burger",
            title: "Burger Góralski",
            price: 28.99,
            description: "Bułka, mięso, sos",
        },
        {
            id:"33",
            category: "Burger",
            title: "Burger z Wołowiną",
            price: 32.99,
            description: "Bułka, mięso, sos",
        },
    ],

        
    Ryby: [
        {
            id:"41",
            category: "Ryba",
            title: "Halibut",
            price: 24.99,
            description: "Filet z opiekanymi ziemniakami, surówka"
        },
        {
            id:"42",
            category: "Ryba",
            title: "Dorsz",
            price: 28.99,
            description: "Filet z opiekanymi ziemniakami, surówka"
        },
    ],

    Napoje: [
        {
            id:"51",
            category: "Napoje",
            title: "Kawa Espresso",
            price: 24.99
        },
        {
            id:"52",
            category: "Napoje",
            title: "Kawa Flatwhite",
            price: 28.99
        },
        {
            id:"53",
            category: "Napoje",
            title: "Lemoniada",
            price: 32.99
        },
    ],

    Alkohol: [
        {
            id:"51",
            category: "Wino",
            title: "Wino",
            price: 24.99
        },
        {
            id:"52",
            category: "Wino",
            title: "Wino",
            price: 28.99
        },
        {
            id:"53",
            category: "Wino",
            title: "Wino",
            price: 32.99
        },
    ],
};


const allProducts = Object.values(products).flat;

export { products };