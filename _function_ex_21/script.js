function tipoDeDado(dado) {
    
    if(typeof dado === 'string'){
        console.log("Este dado é uma String");
    }else if(typeof dado === 'number'){
        console.log("Este dado é um number");
    }else if (typeof dado === 'boolean')
    console.log("Este dado é um boolean");

 
 
}

tipoDeDado(true);

tipoDeDado(28);

tipoDeDado("teste");