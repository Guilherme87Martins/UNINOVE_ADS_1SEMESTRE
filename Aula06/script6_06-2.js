/*
desafio:
Criar um arry com valores :"teclado","mouse","monitor"

Montar um looping para mostrar os valores um por linha
teclado
mouse
monitor
*/
const saida=document.querySelector('.saida');
const produtos_pc=["teclado", "mouse","monitor"];

for(let a=0;a<3;a++){
    saida.innerHTML+=`${produtos_pc[a]} <br>`;
}