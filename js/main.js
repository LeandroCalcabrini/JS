const trumpeter = 5000;
const rutini = 7500;
const sanFelipe = 3500;
const escorihuela = 6000;
const trapiche = 3500;
const laLinda = 4000;
const luigiBosca = 6000;
const donDavid = 5000;

let nombre = '';
let edad = false;
let vino = 0;
let cantidad = 0;
let uva = 0;
let subtotal1 = true;
let subtotal2 = true;
let subtotal3 = true;
let subtotal4= true;
let subtotal5= true;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;

function ingresarNombre(){
 nombre = prompt("Hola ¿Como te llamas?")
}

function ingresarEdad(){
 edad = confirm( nombre + "¿Eres mayor de 18 años?");
}

function presupuesto1(){
    subtotal1 = confirm("El total de tu compra por $"+ total1  + "\n ¿Desea adquirir adquirir algo mas?"); 
}

function presupuesto2(){
subtotal2 = confirm("Tu compra es de $" +total1 + "+ $" + total2 +" = $" + (total1 + total2)  +"\n ¿Desea adquirir adquirir algo mas?"); 
  }

function presupuesto3(){
subtotal3= confirm("Tu compra es de $" + total1 + "+$"+ total2 + "+$"+ total3+ "= $" + (total1 + total2 + total3)+ "\n ¿Desea adquirir adquirir algo mas?");
}
 
function presupuesto4(){
subtotal4= confirm("Tu compra es de $" + total1 + "+$"+ total2 + "+$"+ total3+ "+$"+ total4 + "= $" + (total1 + total2 + total3 + total4)+ "\n ¿Desea adquirir adquirir algo mas?");
}

function presupuesto5(){
subtotal5= confirm("Tu compra es de $" + total1 + "+$"+ total2 +"+$"+ total3+ "+$"+ total4 + "+$" + total5 + "= $" + (total1 + total2 + total3 + total4 + total5)+ "\n ¿Desea adquirir adquirir algo mas?");
}

function presupuestoFinal(){
alert("Muchas gracias " + nombre +" por su compra! el total abonar es de $" + (total1 + total2 + total3 + total4 + total5+ total6 ));
}

function pregunta(){
uva = prompt("Bienvenido/a, " + nombre + "! ¿Que tipo de vino le gustaría adquirir?  \n1. Trumpeter Malbec  \n2. Rutini  Cabernet Sauvignon \n3. San Felipe Chardonnay \n4. Escorihuela Sauvignon Blanc \n5. Trapiche Reserva Malbec \n6. Finca la Linda Syrah \n7. Don David Merlot")
    switch(uva){
        case "1":
         vino = trumpeter;
        break;
            case "2":
            vino = rutini;
            break;
                case "3":
                    vino = sanFelipe;
                    break;
                    case "4":
                        vino = escorihuela;
                        break;
                        case "5":
                            vino = trapiche
                            break;
                            case "6":
                                vino = laLinda;
                                break;
                                case "7":
                                    vino = donDavid
                                    break;
                                    default:
                                    alert("numero ingresado no valido."); 
                                    pregunta()
    
     }
}

function rePregunta(){
    uva = prompt("¿ Que otro vino le gustaría obtener?  \n1. Trumpeter Malbec  \n2. Rutini  Cabernet Sauvignon \n3. San Felipe Chardonnay \n4. Escorihuela Sauvignon Blanc \n5. Trapiche Reserva Malbec \n6. Finca la Linda Syrah \n7. Don David Merlot")
    switch(uva){
        case "1":
         vino = trumpeter;
         break;
         case "2":
            vino = rutini;
            break;
            case "3":
                vino = sanFelipe;
                break;
                case "4":
                    vino = escorihuela;
                    break;
                    case "5":
                        vino = trapiche
                        break;
                        case "6":
                            vino = laLinda;
                            break;
                            case "7":
                                vino = donDavid
                                break;
                                default:
                                alert("numero ingresado no valido.");
                                pregunta()

    }
}


function vinoEsCorrecto(uva){
    if((uva>=1) && (uva<=7)){
        return true
    } else{
        return false
    }
}

function obtenerCantidad(){
    return Number (prompt("¿Que cantidad desea comprar?"))
    
}



ingresarNombre()

while((nombre >=0) || (nombre<0)){
alert("ERROR. Texto ingresado incorrecto.")
ingresarNombre()
}


ingresarEdad()

while (!edad){
    alert("Lo siento, eres menor de edad para ingresar a este sitio") 
ingresarEdad()
}

pregunta()

vinoEsCorrecto()

if(vinoEsCorrecto(uva)){
cantidad = obtenerCantidad()
}

let total1 = vino * cantidad

presupuesto1()

if (!subtotal1){
presupuestoFinal()
}else{
rePregunta()
if (vinoEsCorrecto(uva)){
 cantidad = obtenerCantidad()
    total2 = vino * cantidad   
}

presupuesto2()

if(!subtotal2){
  presupuestoFinal()  
} else{
  rePregunta()
  if(vinoEsCorrecto(uva)) {
     cantidad = obtenerCantidad()
       total3 = vino * cantidad
}

presupuesto3()

if(!subtotal3){
    presupuestoFinal()
}else{
    rePregunta()
    if(vinoEsCorrecto(uva)){
        cantidad = obtenerCantidad()
        total4 = vino * cantidad
}
presupuesto4 ()

if(!subtotal4){
    presupuestoFinal()
}else{
    rePregunta()
    if(vinoEsCorrecto(uva)){
        cantidad = obtenerCantidad()
        total5 = vino * cantidad
}

presupuesto5()
if(!subtotal5){
    presupuestoFinal()
}

}
}
}
}
