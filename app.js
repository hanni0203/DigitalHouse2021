const express = require('express');
const app = express();

const path = require('path');

//levantando servidor
app.listen(3000, (req, res) => console.log("servidor corriendo", "http:localhost:3000") );

//diciendo que la carpeta public es estatica
app.use(express.static(path.resolve(__dirname, './public') ) );

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/home.html') ) );