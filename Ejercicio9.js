
//Calcular el IGV de un producto//
let nombreproducto, precio, operacion
nombreproducto = prompt("Ingrese el nombre del producto. ")
precio = Number(prompt("Ingrese el precio del producto a comprar."))
operacion= (19 / 100) * precio
frase = `Nombre del producto: ${nombreproducto}/ Precio del producto: ${precio}/ Monto del IGV: ${operacion}`
document.write(frase)