/* Variavel que armazena e gerar o numero secreto, numero aleatorio */
var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chuteNumero = parseInt(document.getElementById("valor").value);
    console.log(chuteNumero);

    var result = document.getElementById("resultado");

    if (chuteNumero == numeroSecreto){
        console.log("acertou o numero secreto é " + numeroSecreto);        
        result.innerHTML = "acertou, o numero secreto realmente é " + numeroSecreto;
    }
    else if (chuteNumero > 10 || chuteNumero < 0 ){
        result.innerHTML = "o numero informado deve ser entre 0 ne 10 ";
    }
    else {
        console.log("voce errou, chute outro numero");        
        result.innerHTML = "VOCÊ ERRRRRROU, tente novamente !";
    }
}

console.log(numeroSecreto);