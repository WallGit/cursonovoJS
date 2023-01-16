class Cachorro {
    constructor(raca, patas, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }


latir(){
    console.log("au au");
}
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador',4, 'Caramelo');

console.log(labrador.patas);

labrador.latir();