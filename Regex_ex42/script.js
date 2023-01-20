// const validarID = /\w+[ID]/;

// console.log(validarID.test("testeID"));
// console.log(validarID.test("www.horadecodar.com.br"));
// console.log(validarID.test("123456ID"));


const validarId = /\d+ID\b/;

console.log(validarId.test("321561ID"));
console.log(validarId.test("33232"));
console.log(validarId.test("asd"));
console.log(validarId.test("asdID"));
console.log(validarId.test("ID"));
console.log(validarId.test("123ID"));