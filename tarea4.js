function cantidadVocales(nombre){
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of nombre) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

console.log("Cantidad de Vocales : "+cantidadVocales("Jose Portales"));