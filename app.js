alert('Boas-vindas ao jogo do número secreto');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
console.log(numeroSecreto);
let chute;
let tentativas = 0
while(chute != numeroSecreto){
    tentativas++
    chute = prompt('Escolha um número entre 1 e '+numeroMaximo);
    if(chute == numeroSecreto){
        break
    }else{
        if(numeroSecreto>chute){
            alert("numero secreto maior que "+chute);
        }else{
            alert("numero secreto menor que "+chute);
        }
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('isso ai! Você acertou o numero secreto ' + numeroSecreto + ", com "+tentativas+ ' ' +palavraTentativa);
//if(tentativas > 1) alert('isso ai! Você acertou o numero secreto ' + numeroSecreto + ", com "+tentativas+" tentativas");
//else alert('isso ai! Você acertou o numero secreto ' + numeroSecreto + ", com "+tentativas+" tentativa");

/*
let idade = prompt("Digite sua idade: ");
let resposta = idade >= 18 ? "maior de idade" : "menor de idade";
if (resposta) alert(resposta); else alert(resposta);*/