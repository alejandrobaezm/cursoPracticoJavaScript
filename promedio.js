const lista1 = [
    100,
    200,
    300,
    100,
    100,
    300,
    200,
    200,
    200
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

function sortArrays(lista) {
    function compareNumbers(a, b) {
        return a - b;
    }
    return lista.sort(compareNumbers);
}
function esPar(numero) {
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    const listaOrdenada = sortArrays(lista);

    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return promedioElemento1y2;
    } else {
        return listaOrdenada[mitadLista];
    }

}

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];


