function checarNumero(num){
    let number =Number(num);
    if(Number.isNaN(number)){
        alert("por favor, passe só numeros para o programa");
    } else {
        return number;
    }
}

    checarNumero(5);
    checarNumero('aufuhasij');

    let number = prompt("Digite um número")

checarNumero(number);