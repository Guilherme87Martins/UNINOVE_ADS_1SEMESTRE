let msg;//declaração da variável msg
const saida=document.querySelector('.saida');//seletor de class="saida"
const h1=document.querySelector('h1');//seletor de nome de tag <h1>
const teste=document.querySelector('#teste');//seletor de id="teste"

msg="Hoje a aula mudou!";

saida.innerHTML=msg;// ou posso colocar `${msg}; que também da a saída
saida.innerHTML+=`<br>Mesmo!!`;
saida.innerHTML+=`<h2>${msg}</h2>`;


h1.innerHTML+=" - Javascript";

teste.innerHTML+=" qq alteração";