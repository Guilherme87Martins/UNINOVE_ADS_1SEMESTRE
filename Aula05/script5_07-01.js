let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");

msg="";//alteração
switch (destino) {
  case "São Paulo":
    msg+="Seja bem vindo a cidade que nunca para!";
 // break;// alteração
  case "New York":
    msg+="Seja bem vindo a Big Apple!";
  break;
  case "Palmeiras":
  msg+="Hendeca Campeão Brasileiro🐷💚🏆";
  break;
  default:
    msg="Não encontramos seu destino!";
}
saida.innerHTML=msg;