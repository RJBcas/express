const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.end('hello World sw');
});
app.listen(3000, () =>{
    console.log('servidor on');
});