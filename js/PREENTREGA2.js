

function mostrarVinos(vinos){
    vinos.forEach( vino => alert("- Vino: " + vino.nombre + "\n- Tipo: " + vino.variedad + " - " + vino.varietal + " \n- Bodega: "+ vino.bodega + " \n- Precio: $" + vino.precio) );
}

function filtrarVinos(){
    const resultado = vinos
    .filter(filtrarVariedad)
    .filter(filtrarVarietal)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo) ;
    if(resultado.length > 0){
        mostrarVinos(resultado)
    } else{
        alert("Lo siento, No contamos con ese vino")
    }
}

function filtrarVariedad(vino){
    if(variedad){
        return vino.variedad === variedad;
    }
    return vino;
}

function filtrarVarietal(vino){
    if(varietal){
        return vino.varietal === varietal;
    }
    return vino;
}

function filtrarMinimo(vino){
    if(minimo){
        return vino.precio >= minimo;
    }
    return vino;
}

function filtrarMaximo(vino){
    if(maximo){
        return vino.precio <= maximo;
    }
    return vino;
}

let varietal  = "";

let variedad = prompt("Tenemos para ofrecer una amplia gama de vinos. Por favor ingrese la variedad que desea. \n - Tinto \n - Blanco \n - Rosado");
    switch(variedad){
        case "Tinto":
            varietal = prompt("Ingrese Varietal. \n- Malbec \n- Cabernet Sauvignon \n- Syrah \n- Tempranillo");
            break;
            case "Blanco":
                varietal = prompt("Ingrese Varietal \n- Chardonnay \n- Sauvignon Blanc \n- Torrontés");
                break;
                case "Rosado":
                    varietal = prompt("Ingrese Varietal \n- Malbec \n- Pinot Noir")
                break;
                default:
                    alert("Variedad ingresada incorrecta.")
}

let minimo = Number(prompt("Ingrese el mínimo a gastar"));
let maximo = Number(prompt("Ingrese el máximo que puede gastar"));
alert("DADA A LA VARIEDAD '" + variedad + "', AL VARIETAL '" + varietal + "' Y AL RANGO DE PRECIO INGRESADO,(" + minimo + " - "+ maximo + ") PODEMOS OFRECERLE LOS SIGUIENTES VINOS:")

filtrarVinos ();