const reg =  /\w+: (Wallace|eumemso|wall)/; //: nome hsuajfghujasi

console.log(reg.test("Nome: Wallace"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: wall"));
