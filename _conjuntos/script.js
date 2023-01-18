const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6"));
console.log(reg1.test("temos o numero 2"));
console.log(reg1.test("temos o numero 23"));
console.log(reg1.test("temos o numero 60"));

const reg2 = /[0-9]/;

console.log(reg1.test("temos o numero 6540454456454545647848"));
console.log(reg1.test("temos o numero"));