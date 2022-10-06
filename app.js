const express = require("express");
var path = require ("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.set('views',(path.join(__dirname ,"./src/views"))); 
app.set('view engine', 'ejs');
const mainRoutes = require('./src/routes/mainRoutes');


app.use('/', mainRoutes);

router.get('/', controller.store);
const productRoutes = require('./src/routes/productRoutes');
app.use('/', productRoutes);


const userRoutes = require('./src/routes/userRoutes');

app.use('/', mainRoutes);
app.use('/', userRoutes);

 
app.listen(3000,() => console.log("Servidor corriendo"))


