const cachorro = {
    raca: 'Caramelo',
    uivar: function(){
        console.log("auuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrr");

    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}


console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);

console.log(cachorro.getRaca());