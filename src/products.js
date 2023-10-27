const imageContext = require.context('./assets/meals', false, /\.(png|jpg|jpeg)$/);
const images = imageContext.keys().map(imageContext);
 
const products = {

    Dania: [
        {
            id:"11",
            category: "Dania",
            title: "Ravioli",
            price: 24.99,
            description: "Ravioli, borowik, ricotta, masło, pasta truflowa, parmezan",
            image: images[0],

        },
        {
            id:"12",
            category: "Dania",
            title: "Sałatka Cezar",
            price: 28.99,
            description: "Kurczak sous-vide, sałata rzymska, pomidorki cherry, kapary, anchois, parmezan, grzanki, sos cezar",
            image: images[0],
        },
        {
            id:"13",
            category: "Dania",
            title: "Fettuccine z pieczonym łososiem",
            price: 32.99,
            description: "Fettuccine, łosoś, pomidory, świeży szpinak, kapary, białe wino, sos śmietanowy",
            image: images[0],
        },
    ],

    Pizza: [
        {
            id:"21",
            category: "Pizza",
            title: "Pizza Vegetariana",
            price: 24.99,
            description: "Sos, ser, pieczarki, papryka, oliwki, brokuły, cebula, kukurydza, czosnek",
            image: images[1],
        },
        {
            id:"22",
            category: "Pizza Prosciutto",
            title: "Pizza 2",
            price: 28.99,
            description: "Sos, ser, pieczarki, papryka, oliwki, brokuły, cebula, kukurydza, czosnek",
            image: images[1],
        },
        {
            id:"23",
            category: "Pizza Parma",
            title: "Pizza 3",
            price: 32.99,
            description: "Mozzarella, sos pomidorowy, szynka parmeńska, rukola",
            image: images[1],
        },
    ],

    
    Burgery: [
        {
            id:"31",
            category: "Burger",
            title: "Burger Vege",
            price: 24.99,
            description: "Burger sojowy, pomidor, czerwona cebula, rukola, jalapeno z serem cheddar, hummus",
            image: images[2],
        },
        {
            id:"32",
            category: "Burger",
            title: "Burger Góralski",
            price: 28.99,
            description: "Szarpana wieprzowina, confitowany boczek, czerwona cebula, sos pieczarkowy, oscypek",
            image: images[2],
        },
        {
            id:"33",
            category: "Burger",
            title: "Burger Classic",
            price: 32.99,
            description: "Wołowina, cheddar, ogórek, sos pomidorowo-cebulowy, sałata lodowa",
            image: images[2],
        },
    ],

        
    Ryby: [
        {
            id:"41",
            category: "Ryba",
            title: "Stek z tuńczyka",
            price: 89.80,
            description: "Polędwica z tuńczyka, kasza kuskus, sałatka z fasolki szparagowej, sos curry",
            image: images[3],
        },
        {
            id:"42",
            category: "Ryba",
            title: "Dorsz",
            price: 28.99,
            description: "dorsz, grzyby, szpinak w sosie śmietanowym, ziemniaki w panko",
            image: images[3],
        },
    ],

    Napoje: [
        {
            id:"51",
            category: "Napoje",
            title: "Kawa Espresso",
            price: 24.99,
            image: images[4],
        },
        {
            id:"52",
            category: "Napoje",
            title: "Kawa Flatwhite",
            price: 28.99,
            image: images[4],
        },
        {
            id:"53",
            category: "Napoje",
            title: "Lemoniada",
            price: 32.99,
            image: images[4],
        },
    ],

    Alkohol: [
        {
            id:"61",
            category: "Wino",
            title: "Wino nr 1",
            price: 24.99,
            image: images[5],
        },
        {
            id:"62",
            category: "Wino",
            title: "Wino nr 2",
            price: 28.99,
            image: images[5],
        },
        {
            id:"63",
            category: "Wino",
            title: "Wino nr 3",
            price: 32.99,
            image: images[5],
        },
    ],
};


const allProducts = Object.values(products).flat();

export { products, allProducts };