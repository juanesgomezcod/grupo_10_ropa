CREATE DATABASE productos_db;

USE productos_db;

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE Productos  (
   id INT NOT NULL,
   nombre CHAR(100) NOT NULL,
   descripcion TEXT NOT NULL,
   precio INT NOT NULL,
   id_talla INT,
   id_categoria  INT,
   PRIMARY KEY (id)
);

CREATE TABLE Categorias (
   id INT NOT NULL AUTO_INCREMENT,
   categoria TEXT NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE tallas (
   id INT NOT NULL,
   talla TEXT NOT NULL,
   PRIMARY KEY (id)
);
ALTER TABLE Productos  ADD  FOREIGN KEY (id_categoria) REFERENCES Categorias(id);
ALTER TABLE Productos  ADD  FOREIGN KEY (id_talla) REFERENCES tallas(id)

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE Usuarios (
   id INT NOT NULL AUTO_INCREMENT,
   nombres TEXT NOT NULL,
   apellidos TEXT NOT NULL,
   email VARCHAR(255) NOT NULL,
   contraseña VARCHAR(255) NOT NULL,
   admin  TINYINT NOT NULL DEFAULT 0,
   avatar  VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
)


