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

function alturaTriangulo(lado1, lado2, lado3){
    if (lado1 === lado2) {
        const raiz = (lado1**2)-((lado3**2)/4);
        return Math.sqrt(raiz);
    } else if (lado2 === lado3){
        const raiz = (lado2**2)-((lado1**2)/4);
        return Math.sqrt(raiz);
    } else if (lado1 === lado3){
        const raiz = (lado1**2)-((lado2**2)/4);
        return Math.sqrt(raiz);
    } else {
        alert("Digite valores de un triangulo Isosceles");
    }
}
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

    const resultSquare = document.getElementById("ResultSquare");
    resultSquare.innerText = "El perimetro es " + perimetro.toFixed(2);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-square");
    const value = input.value;

    const area = areaCuadrado(value);

    const resultSquare = document.getElementById("ResultSquare");
    resultSquare.innerText = "El area es " + area.toFixed(2);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("input-triangle1");
    const value1 = input.value;
    const value11 = Number(value1);

    const input2 = document.getElementById("input-triangle2");
    const value2 = input2.value;
    const value22 = Number(value2);

    const input3 = document.getElementById("input-triangle3");
    const value3 = input3.value;
    const value33 = Number(value3);

    const perimetro = perimetroTriangulo(value11, value22, value33);

    const resultTriangle = document.getElementById("ResultTriangle");
    resultTriangle.innerText = "El perimetro es " + perimetro.toFixed(2);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("input-triangle3");
    const value1 = input1.value;
    const value11 = Number(value1);

    const input2 = document.getElementById("input-triangle4");
    const value2 = input2.value;
    const value22 = Number(value2);

    const area = areaTriangulo(value11, value22);

    const resultTriangle = document.getElementById("ResultTriangle");
    resultTriangle.innerText = "El area es " + area.toFixed(2);
}

function calcularAlturaTrianguloIsosceles(){
    const input = document.getElementById("input-triangle1-isosceles");
    const value1 = input.value;
    const value11 = Number(value1);

    const input2 = document.getElementById("input-triangle2-isosceles");
    const value2 = input2.value;
    const value22 = Number(value2);

    const input3 = document.getElementById("input-triangle3-isosceles");
    const value3 = input3.value;
    const value33 = Number(value3);

    const altura = alturaTriangulo(value11, value22, value33);

    const resultTriangleIso = document.getElementById("ResultTriangleIso");
    resultTriangleIso.innerText = "La altura del triangulo es " + altura.toFixed(2);
}

function calcularPerimetroCirculo(){
    const input1 = document.getElementById("input-circle");
    const value1 = input1.value;

    const perimetro = perimetroCirculo(value1);

    const resultCircle = document.getElementById("ResultCircle");
    resultCircle.innerText = "El perimetro es " + perimetro.toFixed(2);
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("input-circle");
    const value1 = input1.value;

    const area = areaCirculo(value1);

    const resultCircle = document.getElementById("ResultCircle");
    resultCircle.innerText = "El area es " + area.toFixed(2);
}