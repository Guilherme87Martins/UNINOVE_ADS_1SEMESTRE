/*
Solicitar a entrada de duas notas (av1 e av2)
Calcular a média das duas notas
Qual a condição para mostrar uma das mensagens abaixo:
media >= 6
"Aprovado"
"Reprovado"
*/
let a,b,c,d,e,f,resultado;
a= parseFloat(prompt("digite nota AV1"));
b= parseFloat(prompt("digite nota AV2"));
f= parseFloat(prompt("digite a media"));
c= (a+b)/2;
d=f;
e=(c>=d) ? "Aprovado 😉" : "Reprovado 😣"
resultado = 5
document.write(`resultado = ${e}<br>`);
document.write(`resultado =${resultado}<br>`);