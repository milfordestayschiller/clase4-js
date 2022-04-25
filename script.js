function contarDeA_n() {
   let contar = document.getElementById.value;
    
    let contar_de_a  =0;
    let contar_hasta = 10;
    while (contar_de_a < contar_hasta ) {
    contar_de_a+=2;
    document.write(contar_de_a + " ")
    }
    return contar;
    }
    // Descomentando la linea de abajo tambien se pueden verificar los valores 
    //contarDeA_n(2,10) 

// Funcion principal fizzBuzz2
function fizzBuzz2() {
    let mostrar = document.getElementById("mostrar").value;
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;

     while (FizzBuzzFinal>FizzBuzz) {
        FizzBuzz ++;
       /// Multiplos de 3
     if(( FizzBuzz % 3 ) == 0){
        
        document.write(FizzBuzz.toString()+ ",")
    
     }
       }
    
     
    return mostrar;
    
}
// Multiplos de 3
function fizzBuzz3() {
    let mostrar = document.getElementById("mostrar").value;
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;

     while (FizzBuzzFinal>FizzBuzz) {
        FizzBuzz ++;
       /// Multiplos de 5
     if(( FizzBuzz % 5 ) == 0){
        
        document.write(FizzBuzz.toString()+ ",")
    
     }
       }
    
     
    return mostrar;
    
}


// Hasta que numero llegara FizzBuzz de acuerdo a lo que ingrese el usuario
function fizzBuzz4(params) {
    let seleccion = document.getElementById("seleccion").value;
     var FizzFinal = prompt("Ingresa el valor de NewFizzBuzz, debe ser entre 1 y 100");
     var FizzInicial = 0;
     while (FizzFinal>FizzInicial) {
        FizzInicial ++;
        document.write(FizzInicial+ " ","")
    }
    
     
    return seleccion;
    
}
// Ingreso de multiplos a eleccion por el usuario
function fizzBuzz5(params) {
    let seleccion = document.getElementById("nuevoargumento").value;
     var fizz_num  = prompt("Ingresa un multiplo cualquiera entre 1 y 100");
     var buzz_num = prompt("Ingresa un multiplo cualquiera entre 1 y 100");
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;
     while (FizzBuzz < FizzBuzzFinal) {
        FizzBuzz ++;
       
   if(( FizzBuzz % fizz_num ) == 0 && ( FizzBuzz % buzz_num ) == 0 ){
        
            document.write(FizzBuzz+ " ","")
           
            }
    
        }
        return seleccion;
    }

