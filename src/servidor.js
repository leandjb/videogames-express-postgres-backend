const express = require('express');
const cors = require('cors');
const {basicConnection, pool} = require('./database.js');
require('dotenv').config();
const {obtener_todos_los_videojuegos} = require ('./controladores/videojuegos-controlador.js')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
  	message: 'games server working',
  	status: 'active'
  });
});


app.get('/api/videojuegos', obtener_todos_los_videojuegos)


app.listen(port, () => {
  console.log(`videogames app listening on port: ${port}`);
});


