function iniciales(nombre){

    var separa=nombre.split(' ');   

    return separa[0].charAt(0)+"." + "" +separa[1].charAt(0)+"." ; 

}

console.log(iniciales("Jose Portales"));