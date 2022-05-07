var nome = "Liane"
var sobrenome = "Araujo Carvalho"
var num = 10
var num2 = 20
var dia = 25
var mes = 04
var ano = 1996
console.log(nome+ " " +sobrenome)

function idade (a,b,c){
  return (a +"/"+ b +"/"+ c)
}
function somar(a,b){
  return a+b;
}

console.log(somar(num,num2))

console.log("Data de nascimento:"+idade(dia,mes,ano))
