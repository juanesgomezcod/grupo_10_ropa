const express = require("express");
var path = require ("path");
const app = express();

app.use(express.static(path.join(__dirname, "/Public")));
app.set('views',(path.join(__dirname ,"./src/views"))); 
app.set('view engine', 'ejs');
const mainRoutes = require('./src/routes/mainRoutes');



app.use('/', mainRoutes);


 



app.listen(3000,() => console.log("Servidor corriendo"))


