// requires
const createError = require('http-errors');
const express = require("express");
const path = require ("path");
const app = express();
const methodOverride =  require('method-override'); 

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.set('views',(path.join(__dirname ,"./src/views"))); 
app.set('view engine', 'ejs');

const mainRoutes = require('./src/routes/mainRoutes');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');


app.use('/', mainRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);





app.listen(3000,() => console.log("Servidor corriendo"))


module.exports = app