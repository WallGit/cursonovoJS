let novoElemento = document.createElement("p");

let texto = document.createTextNode("algum texto");

novoElemento.appendChild(texto);



let elementoAlvo = document.querySelector("#titulo-principal");
let elemntoPai = document.querySelector("#container-principal");

elemntoPai.insertBefore(novoElemento, elementoAlvo);