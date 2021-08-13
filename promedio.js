function calcularPromedio(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }

    return sumaLista / lista.length;
}

console.log(calcularPromedio([100, 200, 300, 400, 500, 1000]));