const validarDominio = /[?www.] \w+\.com.br|.com/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.horadecodar.com.br"));
console.log(validarDominio.test("www.google"));
console.log(validarDominio.test("google.com.br"));