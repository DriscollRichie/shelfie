require('dotenv').config();
const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const binsCtrl = require('./binsCtrl')

const app = express();
app.use(bodyParser.json());

let { CONNECTION_STRING, SERVER_PORT } = process.env

app.get('/api/bins/:shelf', binsCtrl.getBins)
app.get('/api/:shelf/:bin/details', binsCtrl.getBinDetails)

app.patch('/api/product/:product_id', binsCtrl.editProductDetails)

app.post('/api/newProduct/:shelf/:bin', binsCtrl.addProduct)


async function startServer() {
  try {
    let db = await massive(CONNECTION_STRING)
    app.set('db', db)
    console.log('Massive connected')
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`))
  } catch (err) {
    console.error('startServer failed in server.js:', err)
  }
}

startServer()