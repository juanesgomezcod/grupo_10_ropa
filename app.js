const express = require("express");
const path = require ("path")
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(3000,() => console.log("Servidor corriendo"))

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./src/views/index.html"))
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/login.html"));
});

app.get('/login/productCart', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/productCart.html"));
});


app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});

app.get('/hoodies', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});

app.get('/jeans', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});

app.get('/remeras', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});

app.get('/camperas', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});

app.get('/toteBag', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "src/views/register.html"));
});
 

app.listen(3000,() => console.log("Servidor corriendo"))

// app.get("/register", (req,res) => {
//     res.sendFile(path.resolve(__dirname, "./src/views/register.html"));
// });

app.get("/productCart", function(req, res){
    res.sendFile(path.resolve(__dirname, "./src/views/productCart.html"))
});