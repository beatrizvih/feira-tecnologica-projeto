const botaoCharada = document.querySelector(".btn");

let charadaResposta = document.querySelector(".container-charada p");
let textoBotao = document.querySelector(".text")
let respostaVisivel = false;


function revelarCharada(){
    if (!respostaVisivel) { //o ! serve para inverter o valor boleano(q era falso)
        charadaResposta.textContent = "O silêncio se quebrou, findou a minha glória. Não consigo conviver com a porta do quarto aberta. Eu preciso correr, pois fui descoberta! Assinado: Qualquer tipo de violência."
        textoBotao.innerHTML = "Voltar"
    } else {
        charadaResposta.textContent = "Caro leitor, você sabe sobre qual tema iremos tratar? Vou facilitar dando uma dica: Sou silenciosa, chego de mansinho... Sou filha da leviandade, da covardia... Quem me ama é inseguro e faz de mim valentia... Conto com o silêncio de todos para minha garantia... Decifra-me, ou te devoro!"
        textoBotao.innerHTML = "Revelar"
        }
        respostaVisivel = !respostaVisivel
}


botaoCharada.addEventListener('click', revelarCharada)