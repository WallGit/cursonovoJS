let pessoa =  {
nome: "wallace"
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "eumesmo";

console.log(pessoa.nome);

pessoa.nome = "scoobyDoo"

console.log(pessoa2.nome);