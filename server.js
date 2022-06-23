require('dotenv').config();
// Load express
const express = require('express');
const Products = require('./models/products.js');
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const port = process.env.PORT || 3003;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

app.use(express.urlencoded({extended:false}));

// middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})



app.get('./products', (req, res) => {
    res.send({items})
})

// const productInfo = require('./models/products');


// Define "root" route
app.get('/', (req, res) => {
    res.render('Welcome')
})

app.get('/home', (req, res) => {
    res.render('Index', {Products: Products});
})

app.get('/home/new', (req, res) => {
    res.render('New');
});

app.get('/products/:id', (req, res) => {
    res.render('Show', {product: Products[req.params.id]})
})

// app.get('/products', (req, res) => {
//     res.render('Show')
// })

app.post('/home', (req, res) => {
    Products.push(req.body);
    console.log(Products);
    res.redirect('/home');
})

app.get('product/:id', (req, res) => {
    res.render('Show', {Products: productInfo[req.params.id]})
})

app.delete('/product/:id/delete', (req, res) => {
    console.log(req.params.id)
    Products.findByIdAndDelete(req.params.id)
    console.log('item was deleted')
    res.redirect('deleted')
})

app.get('home/:id/edit', (req, res) => {
    res.render('Edit')
})



// Port listener
const PORT = 3000;
app.listen(port, () => {
    console.log(`listening on PORT ${PORT}...`)
})