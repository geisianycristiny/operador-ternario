/* 
Questão 13: Escreva um código JavaScript utilizando o operador ternário para
determinar se uma pessoa é elegível para a aposentadoria. A variável idade
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou
'feminino'). Atribua o resultado à variável elegivel.
*/

const idade = 65; // Pode ser qualquer idade que você queira verificar
const sexo = 'masculino'; // Pode ser 'masculino' ou 'feminino'

const elegivel = idade >= 65 || (idade >= 60 && sexo === 'feminino') ? 'elegível para aposentadoria' : 'não elegível para aposentadoria';

console.log(`Com ${idade} anos e sexo ${sexo}, a pessoa é ${elegivel}.`);