/*function saludarATodos(nombre) {
    var saludo = "Hola" + " " + nombre;
    console.log(saludo)
}
*/
//saludarATodos("Diego","Pedro")

//FUNCIONES DE CALCULO EN LA NUBE

/*function restar(restaUno,restaDos) {
var restaTotal = restaUno - restaDos
 return restaTotal;   
}

var mostrarResta = restar(9,2);

console.log(mostrarResta);
*/

/*function retornaCuadradoNumero(numero) {
   var cuadradoNumero = Math.sqrt(numero)
   return cuadradoNumero;
}

var raiz = retornaCuadradoNumero(9);

console.log(raiz);
*/

//si usted don nombre tiene menos de 18 no puede tener cuenta corriente

//si tiene mas de 18 años retorna true

//verificarEdadParaCuentaCorriente

/*function verificaEdadCC(nombreP,edadP) {
   
    if (edadP <18) {
    console.log("Ud NO tiene edad para tener cuenta corriente" + " " + nombreP);
    aplicaCC = false;
    }
    else {
        console.log("Ud tiene edad para cuenta CC" + " "+nombreP);
        aplicaCC = true;
    }
    return aplicaCC;
}

var resultadoVerificacion = verificaEdadCC("Milford",17);

console.log(resultadoVerificacion);
*/

function triplicador(numero) {
    var triplica = numero *3;
    return triplica;
}

var triplicando = triplicador(3)
console.log("El numero triplicado es " + triplicando)
////////////////////
function multiplicador(multiplica1,multiplica2) {
    var multiplicar = multiplica1 * multiplica2;
    return multiplicar;
    
}

var multiplicando = multiplicador(4,3)
console.log("La multiplicacion de los numeros es " +multiplicando)
////////////////
function divisor(divide1,divide2) {
    var dividir = divide1 / divide2;
    return dividir;
    
}

var dividiendo = divisor(9,3)
console.log("La division de los numeros es " +dividiendo)

/////

function modulo(modulo1,modulo2) {
    var modulo = modulo1 % modulo2;
    return modulo;
    
}

var modulos = modulo(4,2)
console.log("el modulo de los numeros es " +modulos)