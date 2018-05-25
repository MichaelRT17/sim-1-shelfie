const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/api/inventory', ctrl.showProducts);
app.post('/api/product', ctrl.createProduct);
app.delete('/api/deleteProduct/:id', ctrl.deleteProduct);
app.put('/api/editProduct/:id', ctrl.updateProduct);

const PORT = 8080;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(PORT, () => {
        console.log(`yo yo yo from port: ${PORT}`)
    });
})