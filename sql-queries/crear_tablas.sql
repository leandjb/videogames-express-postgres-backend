-- =============================================
-- Creacion de tablas - base de datos music-db
-- =============================================

CREATE TABLE IF NOT EXISTS videojuegos (
    id                 SERIAL PRIMARY KEY,
    nombre             VARCHAR(150) NOT NULL,
    genero             VARCHAR(100) NOT NULL,
    plataforma         VARCHAR(100) NOT NULL,
    precio             NUMERIC(10, 2) NOT NULL CHECK (precio >= 0),
    fecha_lanzamiento  DATE,
    desarrollador      VARCHAR(150),
    creado_en          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
