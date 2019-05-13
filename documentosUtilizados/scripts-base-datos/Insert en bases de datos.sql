select * from cliente;

-- Actual parameter values may differ, what you see is a default string representation of values
INSERT INTO public.cliente (nombre,segundo_nombre,apellido,segundo_apellido,fecha_nacimiento,sexo,direccion)
VALUES ('Marvin','Jeovany','Zarceno','Cartagena','1992-06-10','M','Las Arboledas');


INSERT INTO public.cliente (nombre,segundo_nombre,apellido,segundo_apellido,fecha_nacimiento,sexo,direccion)
VALUES ('Cecilia','Rebeca','Lopez','Ayala','1994-06-02','F','Las Arboledas');

select * from cuenta_bancaria

INSERT INTO public.cuenta_bancaria
(num_cuenta, fecha_inicio, fecha_fin, monto_actual, idcliente, id_tipo_cuenta)
VALUES('123-123-33-123123-3', '2017-02-05', NULL, 350, 1, NULL);

select * from tipo_cuenta_bancaria

