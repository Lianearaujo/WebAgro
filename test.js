const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('usuarios', 'root', 'bonita007', {
  host: "localhost",
  dialect: 'mysql'
})

const User = sequelize.define('users', {
  nome:{
    type: Sequelize.STRING
  },
  sobrenome:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  },
  datanascimento:{
    type: Sequelize.DATE
  },
  cpf:{
    type: Sequelize.STRING
  },
  rg:{
    type: Sequelize.STRING
  },
  passowrd:{
    type: Sequelize.STRING
  }
})

User.create({
  nome: "Liane",
  Sobrenome: "Araujo Carvalho",
  email: "lianearaujo177@gmail.com",
  datanascimento: 25041996,
  cpf: "106.751.774-05",
  rg: "123456",
  passowrd: '12345'
})
/*sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso");
}).catch(function(erro){
  console.log("Falha ao se conectar!"+ erro);
}) */

/*const Postagem = sequelize.define('postagens', {
  titulo:{
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

Postagem.sync({force:true}) */
