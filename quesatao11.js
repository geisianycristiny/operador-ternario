/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A
variável idade contém a idade da pessoa. Atribua o resultado à variável
categoria.
 */

const idade = 25; // Pode ser qualquer idade que você queira verificar

const categoria = idade < 2 ? 'bebê' : 
                  idade >= 2 && idade < 12 ? 'criança' : 
                  idade >= 12 && idade < 18 ? 'adolescente' : 
                  idade >= 18 && idade < 60 ? 'adulto' :
                  'idoso';

console.log(`Com ${idade} anos, a pessoa é um ${categoria}.`);