const express = require("express");
var path = require ("path");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set('views',(path.join(__dirname ,"views"))); 
app.set('view engine', 'ejs');
const mainRoutes = require('./src/routes/mainRoutes');

// app.get("/", function(req, res){
//     res.sendFile(path.resolve(__dirname, "./src/views/index.ejs"))
// });

app.use('/', mainRoutes);


 



app.listen(3000,() => console.log("Servidor corriendo"))


