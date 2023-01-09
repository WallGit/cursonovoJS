let num = 41;
let divisoes = 0;

for(let i = 1; i <= num; i++){
    
    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log(`O numero ${num} é primo`);

}else{
    console.log(`O numero ${num} nao é primo`);
}








// exibirNumerosPrimos(25);

// function exibirNumerosPrimos(limite){
//     for(let numero = 2; numero <= limite; numero++){
//         if(NumerosPrimo(numero)) console.log(numero);
//     }
// }


// function NumerosPrimo(numero){
//     for(let divisor =2; divisor < numero; divisor++){
//         if(numero % divisor === 0){
//             return false;
//         }
//     }
//     return true;
// }
