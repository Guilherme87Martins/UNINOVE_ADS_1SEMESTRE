let a,b;
const saida=document.querySelector(".saida");
a=6;
b=5;
if (a == b) {
 saida.innerHTML="A variável a é igual a variável b";
}
else if (a < b){
 saida.innerHTML="A variável a é menor a variável b";
}
else{
 saida.innerHTML="A variável a é maior a variável b";
}
/*
se tiver 2 situações como fica?
if(){}
else{}

se tiver 3 situações?
if(){}
else if(){}
else(){}

Se tiver 7 situações para analisar,
como ficam as instruções if, else if, else
if(){}
else if(){}
else if(){}
else if(){}
else if(){}
else if(){}
else{}
*/