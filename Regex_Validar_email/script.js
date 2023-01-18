const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("wallace@gmail.com"));
console.log(validarEmail.test("wallace@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("wallace@gmail.com.br"));