// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2  + "cm y " + baseTriangulo +  "cm" );

function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base;
};
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};
// console.log("El area del triangulo mide: " + areaTriangulo + "cm2");
console.groupEnd();

// Codigo del circulo
console.group("Circulos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = 3.1415;
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
};

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
// console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
};
// console.log("El area del circulo mide: " + areaCirculo + "cm2");
console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-square");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-square");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert(perimetro);
}