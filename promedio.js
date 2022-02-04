const lista1 = [
    100,
    200,
    300,
    500
];

function calcularMediaAritmetica(lista){
    //Se puede hacer con un clico for o con el metodo reduce con una funcion interna
    
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

