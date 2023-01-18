const validarID = /\w+[ID]/;

console.log(validarID.test("testeID"));
console.log(validarID.test("www.horadecodar.com.br"));
console.log(validarID.test("123456ID"));
