const express = require('express');
const app = express();


// rutas
app.get('/', (req, res) =>{
    res.end('holaa 2');
});

app.get('/login', (req, res) =>{
    res.end('aqui va el login');
});

app.get('*', (req, res) => {
    res.end('not FOUD verifica la ruta');
});


app.listen(3000, () =>{
    console.log('servidor on');
});