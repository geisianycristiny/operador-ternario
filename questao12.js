/* 
Questão 12: Escreva um código JavaScript utilizando o operador ternário para
determinar se uma pessoa pode votar. A variável idade contém a idade da
pessoa. Atribua o resultado à variável podeVotar.
*/
const idade = 20; // Pode ser qualquer idade que você queira verificar

const podeVotar = idade >= 16 ? 'pode votar' : 'não pode votar';

console.log(`Com ${idade} anos, a pessoa ${podeVotar}.`);