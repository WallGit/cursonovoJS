function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.coor = cor;
    this.uivar = function(){
        console.log("AUuuuuu");
    }
}
Cachorro.prototype.latir = function(){
    console.log("Au au");
}


let husky = new Cachorro('Husky', 4, 'cinza');

husky.uivar();
husky.latir();