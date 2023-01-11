let pessoa = {
    "nome": "wallace",
    "idade": 28,
    "profissao": "QA",
    "hobbies": ["video game","filmes", "animes"]

}

let pessoaTexto = JSON.stringify(pessoa);
    console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);