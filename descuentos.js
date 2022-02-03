// const precioOriginal = 100;
// const descuento = 15;

function CalcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("input-price");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("input-discount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}