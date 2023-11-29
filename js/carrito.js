let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const botonVaciar = document.querySelector(".carrito-accion-vaciar");
const precioTotal = document.querySelector("#carrito-total");
const botonComprar = document.querySelector("#carrito-accion-comprar");




function cargarProductosEnCarrito (){
    if (productosEnCarrito && productosEnCarrito.length >0 ){
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img src="${producto.imagen}" class="carrito-producto-img" alt="${producto.nombre}">
                        <div class="carrito-producto-titulo">
                            <small>Producto</small>
                            <h4>${producto.nombre}</h4>               
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <button><i id="${producto.id}"class="restar bi bi-file-minus"></i></button>
                            <p id="${producto.id}">${producto.cantidad}</p>
                            <button> <i id="${producto.id}" class="sumar bi bi-file-plus"></i></button>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p id="${producto.id}">$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p>
                        </div>
                        <button id="${producto.id}" class="carrito-producto-eliminar"> <i class="bi bi-trash-fill"></i></button>
            `;
    contenedorCarritoProductos.append(div)
    
        });
        
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar()
    sumarCantidad()
    restarCantidad()
    sumarTotal()
}

cargarProductosEnCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    
    botonesEliminar.forEach(boton=>{
        boton.addEventListener("click", (e)=>{
            const idBoton = e.currentTarget.id;
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
            productosEnCarrito.splice(index, 1);

            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
            cargarProductosEnCarrito()
        })
    })
}


function vaciarCarrito (){   
        botonVaciar.addEventListener("click",()=>{
             productosEnCarrito.length = 0;

             localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))
        
            cargarProductosEnCarrito();
        })
 }

vaciarCarrito()



function sumarTotal(){
    precioTotal.innerText = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
}


function comprar(){
    botonComprar.addEventListener("click",()=>{
        productosEnCarrito.length = 0;

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
        cargarProductosEnCarrito()
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
    })

}

comprar()




function sumarCantidad(){
    const sumarCantidad = document.querySelectorAll(".sumar")
    sumarCantidad.forEach(boton =>{
        boton.addEventListener("click",(e)=>{

            const idBotonSumar = e.currentTarget.id;

            const index = productosEnCarrito.findIndex(producto => producto.id === idBotonSumar);
            productosEnCarrito[index].cantidad++

            localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))

            cargarProductosEnCarrito()
        })
    })

}

function restarCantidad(){
    const restarCantidad = document.querySelectorAll(".restar")
    restarCantidad.forEach(boton=>{
        boton.addEventListener("click", (e)=>{
            const idBotonRestar = e.currentTarget.id;

            const indexX = productosEnCarrito.findIndex(producto => producto.id === idBotonRestar);
            if(productosEnCarrito[indexX].cantidad > 0){
                productosEnCarrito[indexX].cantidad--

            }

            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

            cargarProductosEnCarrito()
        })
    })
}
   



