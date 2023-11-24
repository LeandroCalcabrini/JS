/* function agregarAlCarrito(nuevoProducto){
    const memoria = localStorage.getItem("vinos");
    console.log(memoria);
    if(!memoria){
        nuevoProducto.cantidad = 1;
        localStorage.setItem("vinos",JSON.stringify([nuevoProducto]));
    }else {
        const nuevaMemoria = JSON.parse(memoria);
        nuevaMemoria.push(nuevoProducto);
        localStorage.setItem("vinos",JSON.stringify(nuevaMemoria));

    }
} */



