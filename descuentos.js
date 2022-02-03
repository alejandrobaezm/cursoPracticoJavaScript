const precioOriginal = 100;
const descuento = 15;

function CalcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
}


// console.log({
//     precioOriginal,
//     porcentajePrecioConDescuento,
//     descuento,
//     precioConDescuento
// });