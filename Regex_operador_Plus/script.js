const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("12341"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("dsadasfga"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("12341321214214213421412412412"));

