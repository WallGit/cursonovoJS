

class Filme {
   
    nome;
    genero;
    classificacao;
    
    constructor(nome, genero, classificacao){
        this.nome = nome;
        this.genero = genero;
        this.classificacao = classificacao;

    }
  
}

 let filme1 = new Filme("Anjos da noite", "Ação", 16); 
 let filme2 = new Filme("vingadores", "ação", 14);

 function assistir(variavel) {

    return variavel;
                 
} 

 // filme1.genero = "Ação";
// filme1.classificacao = 14;

// filme2.nome = "the last of us";
// filme2.genero = "suspense";
// filme2.classificacao = 16;

console.log(filme1);
console.log(filme2);
console.log(assistir(filme1.nome));
console.log(assistir(filme2.nome));








