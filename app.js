const express = require('express');
const path = require('path');


const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3003, () => { console.log("Servidor corriendo en el puerto 3003");
});


app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/home.html", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register.html", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login.html", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});