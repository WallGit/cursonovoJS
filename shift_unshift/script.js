let carros = ["BMW", "FORD" , "FERRARI"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Audi');

console.log(carros);
console.log(carros[0]);

// shift remove o primeiro elemento do array
// unshift insere um elemento no começo do array