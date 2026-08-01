const express = require('express');
const cors = require('cors');
const {basicConnection, pool} = require('./database.js');
require('dotenv').config();

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

app.get('/api/videojuegos', async (req, res)=>{
	try{
		const consulta = 'SELECT * FROM videojuegos ORDER BY id ASC';
		const resultado = await pool.query(consulta);

		res.json({
			exito: true,
			mensaje: 'videojuegos obtenidos correctamente',
			datos: resultado.rows,
			total: resultado.rows.length,
		});

	}catch(error){
		console.error('ERROR:', error);
		res.status(500).json({
			exito: false,
			mensaje: 'Error al obtener los videojuegos',
			error: error.message,
		});
	}
});


app.listen(port, () => {
  console.log(`videogames app listening on port: ${port}`);
});


