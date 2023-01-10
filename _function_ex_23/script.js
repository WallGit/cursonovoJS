function TamanhoLetra(letra) {

  if(letra.length > 10){
    console.log("seu texto esta muito grande");
  }else { 
    console.log("texto dentro do limite");
  }
  console.log(letra.length);

}    

TamanhoLetra("wallace");

TamanhoLetra("wallaceeumemsotestando");

TamanhoLetra("10-");
