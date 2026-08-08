const { pool } = require('../database.js');

const obtener_todos_los_videojuegos = async (req, res) => {

	try {
		const consulta = 'SELECT * FROM videojuegos ORDER BY nombre DESC'
		const resultado = await pool.query(consulta)

		res.json({
			exito: true,
			mensaje: 'videojeugos obtenidos correctamente',
			total: resultado.rows.length,
			datos: resultado.rows,
		})

	} catch (error){
		console.error('Error:', error);

		res.status(500).json({
			exito: false,
			mensaje: 'Error al obtener los videojuegos',
			error: error.message,
		})
	}
}

module.exports = {
	obtener_todos_los_videojuegos
}

