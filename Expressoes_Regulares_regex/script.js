const reg1 = new RegExp('carro');

console.log(reg1.test("Tem carro?"));
console.log(reg1.test("não tem"));

const reg2 =  /carro/;

let text = 'tem carro no estacionamento';

console.log(reg2.test("tem carro?"));
console.log(reg2.test("não tem"));
console.log(reg2.test(text));

console.log(/quadrado/.test("onde tem um quadrado"));
console.log(/quadrado/.test("31285712793848219quadrado41924821"));