const validarDominio =  /^(\w|\.|-){3,20}@\w+\.(com(\.br)?|net)$/gi


console.log(validarDominio.test("wallace.b.silva@capgemini.com"));