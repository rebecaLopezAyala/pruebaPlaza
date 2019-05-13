CREATE DATABASE db_banco;


--CREACIÓN DE TABLAS...

create table CLIENTE( -- INFORMACIÓN PERSONAL DEL CLIENTE
	idCliente SERIAL primary key,
	nombre CHAR(25) not null,
	segundo_nombre CHAR(25),
	apellido CHAR(25) not null,
	segundo_apellido CHAR(25), 
	apellido_casada CHAR(25),
	fecha_nacimiento date not null,
	sexo CHAR(1),
	direccion text
);

--USUARIO, CONTRASEÑA, USERNAME Y SI LA CUENTA ESTÁ ACTIVA O NO
create table USUARIO(
	usuario varchar(13) primary key,
	contrasena text not null,
	fecha_inscripcion date,
	activo char(1) not null,
	idCliente SERIAL
);

--CUENTA BANCARIA DEL CLIENTE, 
create table CUENTA_BANCARIA(
 	num_cuenta varchar(20) primary key,
	fecha_inicio date not null,
	fecha_fin date,
	monto_actual real,
	idCliente SERIAL,
	id_tipo_cuenta char(5)
);


--TABLA EN LA QUE SE ENCUENTRAN TODOS LOS TIPOS DE CUENTA BANCARIA
create table TIPO_CUENTA_BANCARIA(
	id_tipo_cuenta char(5) primary key,
	nombre varchar(50)
);

--TABLA EN LA QUE SE ENCUENTRAN TODOS LOS PAGOS QUE SE REALIZARON A TARJETAS DE CRÉDITO PROPIAS Y A TERCEROS
create table PAGO_TARJETA(
	id_pago_tarjeta varchar(8) primary key,
	fecha_pago date not null,
	num_tarjeta varchar(16),
	monto real,
	num_cuenta varchar(20)
);

--TABLA EN LA QUE SE ENCUENTRAN TODOS LOS PAGOS DE PRÉSTAMO
create table PAGO_PRESTAMO(
	id_pago_prestamo varchar(8) primary key,
	fecha_pago date not null,
	codPrestamo varchar(16),
	monto real,
	num_cuenta varchar(20)
);

--TABLA EN LA QUE SE ENCUENTRAN TODOS LOS PRODUCTOS BANCARIOS, TARJETAS DE CRÉDITO, PRÉSTAMOS ... ETC
create table PRODUCTO_BANCARIO(
	cod_prod_bancario varchar(8) primary key,
	fecha_inicio date not null,
	fecha_fin date,
	cod_tipo_prod varchar(5),
	idCliente SERIAL,
	num_cuenta varchar(20)
);

--TABLA EN LA QUE SE ENCUENTRAN LOS ESTADOS DE CUENTA, SALDO INICIAL Y SALDO ACTUAL...

create table ESTADO_CUENTA(
	cod_estado_cuenta char(10) primary key,
	fecha_inicio date not null, 
	fecha_fin date, 
	monto_ini real,
	monto_fin real,
	cod_prod_bancario varchar(8),
	usuario varchar(30)
);

--Tabla en la que se encuentran todas las transferencias bancarias
create table TRANSFERENCIA(
	cod_transferencia varchar(8) primary key,
	fecha_transferencia date not null, 
	cuenta_destino varchar(20),
	cuenta_origen varchar(20),
	monto real, 
	estado_transferencia char(1),
	num_cuenta varchar(20)
);

--TABLA EN LA QUE SE ENCUENTRAN LOS DATOS DE LA TRANSFERENCIA
create table ESTADO_TRANSFERENCIA(
	estado_transferencia char(1) primary key,
	valor varchar(30)
);

--tabla en la que se encuentran lso tipos de productos bancarios, 
create table TIPO_PRODUCTO_BANCARIO(
	cod_tipo_prod varchar(5) primary key,
	nombre text 
);