let pessoa = {
    nome: "wallace",
    idade: 28,
    profissao: "QA"
}


console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;

console.log(pessoa);