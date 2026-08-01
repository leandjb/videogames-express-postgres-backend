const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
});

const basicConnection = async () => {
	try {
		console.log('Conexion exitosa a postgres');
		console.log(`database: ${process.env.DB_NAME}`)
	} catch (error){
		console.error('Error al conectar postgres: ', error.message)
	}
}

module.exports = {pool, basicConnection}
