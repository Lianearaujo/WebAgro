CREATE TABLE nome(
	nome VARCHAR(50),
	email VARCHAR(30),
	idade INT
);

INSERT INTO nome(nome, email,idade) values (
  'Liane Araujo',
  'lianearaujo177@gmail.com',
  8
);

SELECT * FROM nome;

SELECT * FROM nome WHERE idade = 8;


CREATE TABLE users (
  id int,
  nome VARCHAR(10),
  sobrenome VARCHAR(30),
  email VARCHAR(35),
  datanascimento DATE,
  cpf VARCHAR(14),
  rg VARCHAR (10),
  passowrd VARCHAR(35)
);

CREATE TABLE endereco (
  id int,
  rua varchar(30),
  numero char(10),
  bairro varchar(30),
  cidade varchar(30),
  estado varchar(30),
  complemento varchar(120)
);

CREATE TABLE anuncioProduto (
  id int,
  nomeproduto varchar (120),
  descricao varchar (200),
  preco float,
  condicao varchar (20),
  foto varchar (200),
  formasdepagamento varchar(200)  
);
