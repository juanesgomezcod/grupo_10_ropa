CREATE DATABASE swip_db;

USE swip_db;

--
-- Estructura de tabla: `products`
--

CREATE TABLE products  (
   id INT NOT NULL AUTO_INCREMENT,
   nombre CHAR(100) NOT NULL,
   descripcion TEXT NOT NULL,
   precio INT NOT NULL,
   id_talla INT,
   id_categoria  INT,
   imagen TEXT,
   PRIMARY KEY (id)
);

CREATE TABLE categories (
   id INT NOT NULL,
   categoria TEXT NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE sizes (
   id INT NOT NULL,
   talla TEXT NOT NULL,
   PRIMARY KEY (id)
);
-- --------------------------------------------------------
--
-- Estructura de: `users`
--

CREATE TABLE users (
   id INT NOT NULL AUTO_INCREMENT,
   nombres TEXT NOT NULL,
   apellidos TEXT NOT NULL,
   email VARCHAR(255) NOT NULL,
   clave VARCHAR(255) NOT NULL,
   administrador  TINYINT NOT NULL DEFAULT 0,
   avatar  VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
)

ALTER TABLE products  ADD  FOREIGN KEY (id_categoria) REFERENCES categories(id);
ALTER TABLE products  ADD  FOREIGN KEY (id_talla) REFERENCES sizes(id)




--
-- Script de población de datos 
--


-- categorias

insert into categories  (id, categoria) values (1, 'hoodies');
insert into categories  (id, categoria) values (2, 'jeans'); 
insert into categories  (id, categoria) values (3, 'remeras');
insert into categories  (id, categoria) values (4, 'camperas');
insert into categories  (id, categoria) values (5, 'tote bag');

-- tallas

insert into sizes (id, talla) values (1, 'XS');
insert into sizes (id, talla) values (2, 'S');
insert into sizes (id, talla) values (3, 'M');
insert into sizes (id, talla) values (4, 'L');
insert into sizes (id, talla) values (5, 'XL');
insert into sizes (id, talla) values (6, 'unica');

-- productos

insert into products (id, nombre, descripcion, precio, id_talla, id_categoria) values (1, 'hoodie AstroWorld', 'hoodie estampado', '95000' , '3', '1');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (2, 'jean glam', 'jean estampando pintando', '90000', '3', '2');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (3, 'remera aesthetic', 'remera con estampado aesthetic', '90000', '1', '3');
insert into products (id, nombre, descripcion, precio, id_talla, id_categoria) values (4, 'campera glow', 'campera tornazol', '150000', '2', '4');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (5, 'tote bag butterfly', 'tote bag con estampado de mariposa', '60000', '6', '5');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (6, 'hoodie over-size', 'hoodie oversize, estampado', '100000', '4', '1');
insert into products  (id, nombre, descripcion,precio, id_talla, id_categoria) values (7, 'jean hearts', 'jeans con estampado de corazones', '100000', '3', '2');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (8, 'remera shine', 'remera tornazol estampada', '40000', '1', '3');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (9, 'campera glow', 'campera gris brillante', '100000', '4', '4');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (10, 'tote bag stars', 'tote bag con estampado de estrellas', '100000', '6', '5');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (11, 'hoodie X', 'hoodie estampado X', '100000',  '3', '1');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (12, 'jean lux', 'jean pintado lux', '100000',  '2', '2');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (13, 'remera Brooklyn', 'remera estampado Brooklyn', '100000', '1', '3');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (14, 'campera NYC', 'campera estampado NYC', '100000', '2', '4');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (15, 'tote bag bussines', 'tote bag estampada', '100000', '6', '5');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (16, 'hoodie moscow mule', 'hoodie estampado playa', '130000', '5', '1');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (17, 'jean artic', 'jean pintado artic', '90000', '2', '2');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (18, 'remera black', 'remera básica', '50000', '3', '3');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (19, 'campera green-reed', 'campera divida en dos colores', '160000', '3', '4');
insert into products  (id, nombre, descripcion, precio, id_talla, id_categoria) values (20, 'tote bag plants', 'tote bag estampado de plantas',  '65000', '6', '5');

-- usuarios

insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (1, 'Clayson', 'Nutton', 'cnutton0@elpais.com', 'Z3nLHNVV', 0, 'https://robohash.org/debitisaperiamconsequatur.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (2, 'Evaleen', 'Ackery', 'eackery1@123-reg.co.uk', 'QoceQ2m1', 1, 'https://robohash.org/nostrumquiqui.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (3, 'Aguistin', 'Fielden', 'afielden2@exblog.jp', 'vRYJSg65xJ', 0, 'https://robohash.org/quianamdicta.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (4, 'Neall', 'Helliwell', 'nhelliwell3@harvard.edu', 'EqhtqlsOBP', 0, 'https://robohash.org/siteaquea.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (5, 'Kaylil', 'Sheals', 'ksheals4@ftc.gov', 'T5afrtxFC', 0, 'https://robohash.org/suntenimqui.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (6, 'Ely', 'Dannohl', 'edannohl5@weather.com', '33RSeNv', 0, 'https://robohash.org/natusipsamaiores.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (7, 'Raynell', 'Kinkade', 'rkinkade6@marketwatch.com', 'gWts2dH', 0, 'https://robohash.org/perferendisdelectusporro.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (8, 'Lyn', 'Haslen', 'lhaslen7@purevolume.com', 'KgxbOUT8oEz', 0, 'https://robohash.org/utvoluptasmaxime.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (9, 'Josy', 'Mussington', 'jmussington8@google.fr', 'APHhGko', 1, 'https://robohash.org/laudantiumnihilquod.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (10, 'Prudence', 'Klemencic', 'pklemencic9@t.co', 'RhZBPDSVP', 1, 'https://robohash.org/sedaliasest.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (11, 'Sansone', 'Iskowicz', 'siskowicza@goo.gl', 'dgg5O6ysa7v', 1, 'https://robohash.org/laborumsaepesit.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (12, 'Shara', 'Lothlorien', 'slothlorienb@sfgate.com', '9q3zjX6c', 1, 'https://robohash.org/omnisexpeditaexplicabo.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (13, 'Creight', 'Ganders', 'cgandersc@clickbank.net', 'ecBOQwJyI', 1, 'https://robohash.org/quosadipiscinam.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (14, 'Odella', 'Stockell', 'ostockelld@nih.gov', 'gtiz259Fu', 0, 'https://robohash.org/quiaeosreprehenderit.png?size=50x50&set=set1');
insert into users(id, nombres, apellidos, email, clave, administrador, avatar) values (15, 'Shea', 'Barnby', 'sbarnbye@abc.net.au', 'QIhzLy3i9t', 1, 'https://robohash.org/porroeligendiut.png?size=50x50&set=set1');
insert into users (id, nombres, apellidos, email, clave, administrador, avatar) values (16, 'Leann', 'Hammerman', 'lhammermanf@nifty.com', '10VLd3K', 0, 'https://robohash.org/perferendisminimaet.png?size=50x50&set=set1');