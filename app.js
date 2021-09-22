const express = require('express');
const { userInfo } = require('os');
const app = express();

const path = require('path');

//levantando servidor
app.listen(3000, (req, res) => console.log("servidor corriendo", "http:localhost:3000") );

//diciendo que la carpeta public es estatica
app.use(express.static(path.resolve(__dirname, './public') ) );

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html') ) );

app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/register.html') ) );

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/login.html') ) );

//metodo post
app.post('/register', (req, res)=> {
    res.redirect('/');
});

app.post('/login', (req, res)=> {
    res.redirect('/');
});

app.post('/search', (req, res)=> {
    res.redirect('/');
});