const Products = [
    {
        name: 'Dog Food',
        price: 35.99,
        img: "https://cdn.shopify.com/s/files/1/2606/8170/products/proplansensitiveskinsalmon_x700.jpg?v=1619192321"
    },
    {
        name: 'Treats',
        price: 6.99,
        img: "https://cdn.shopify.com/s/files/1/1991/8781/products/BOX_209721_CLUCKY-JERKY-STICKS_GRID_0451-2001x2000-064a3d6_grande.png?v=1614447119"
    },
    {
        name: 'Toys',
        price: 4.99,
        img: "https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2019/01/best_dog_toys_happy_pets_nuts_for_knots_.jpg?itok=Gg3mUXFn"
    }
];

module.exports = Products;

// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: {type: String, required: true },
//     price: {type: Number, required: true },
//     image: image
// });

// const Product = mongoose.model('Product', productSchema)

// module.exports = Product;
