const express = require('express');
const app = express();
const morgan = require('morgan');

//requiriendo rutas

const routes = require('./routes');
const Api = require('./api');

// setting
app.set('appName','mi primer server');

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'))


// rutas
app.use(routes);

app.use('/api',Api);


app.get('*', (req, res) => {
    res.end('not FOUD verifica la ruta');
});



app.listen(3000, ()=>{
    console.log('servidor on');
    console.log('nombre de la app', app.get('appName'));
});