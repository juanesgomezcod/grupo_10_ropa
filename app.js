const express = require("express");
const path = require ("path")
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(3000,() => console.log("Servidor corriendo"))

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});

// app.get("/register", (req,res) => {
//     res.sendFile(path.resolve(__dirname, "./src/views/register.html"));
// });

app.get("/productCart", function(req, res){
    res.sendFile(path.resolve(__dirname, "./src/views/productCart.html"))
});