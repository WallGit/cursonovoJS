const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;  


console.log(validaIp.test("127.0.0.1"));
console.log(validaIp.test("8.8.8.8"));
console.log(validaIp.test("192.168.0.15"));


console.log(validaIp.test("127.0.0"));
console.log(validaIp.test("127"));
console.log(validaIp.test("asd"));
console.log(validaIp.test("1234215"));
console.log(validaIp.test("12732.0321321.32130.3211"));