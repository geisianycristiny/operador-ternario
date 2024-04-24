/* 
: Escreva um código JavaScript utilizando o operador ternário para
determinar se uma pessoa pode dirigir ou não. A variável idade contém a idade
da pessoa. Atribua o resultado à variável permissao.
*/

const idade = 18; // Pode ser qualquer idade que você queira verificar

const permissao = idade >= 18 ? 'pode dirigir' : 'não pode dirigir';

console.log(`Com ${idade} anos, a pessoa ${permissao}.`);