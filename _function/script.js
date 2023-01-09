function imprimirNoConsole () {
    console.log("Ola Mundo!");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é: " + num);

}


imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

const numeroAleatorio = function(){
    console.log(parseInt(Math.random()* 10));
}


numeroAleatorio();
numeroAleatorio();
numeroAleatorio();
numeroAleatorio();