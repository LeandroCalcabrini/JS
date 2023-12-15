let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const botonVaciar = document.querySelector(".carrito-accion-vaciar");
const precioTotal = document.querySelector("#carrito-total");
const botonComprar = document.querySelector("#carrito-accion-comprar");
const precioUsd = document.querySelector("#carrito-total-usd")




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
                            <div class="contenedor-cantidad-carrito">
                            <button id="${producto.id}" class="resstar"><i id="${producto.id}"class="restar bi bi-file-minus"></i></button>
                            <p id="${producto.id}">${producto.cantidad}</p>
                            <button> <i id="${producto.id}" class="sumar bi bi-file-plus"></i></button>
                            </div>
                            
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
            Swal.fire({
                title: "Quiere eliminar este producto?",
                text: "Va a eliminar este producto! Esta seguro/a?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si!",
                cancelButtonText:"No, no quiero eliminarlo!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Eliminado!",
                    text: "El producto ha sido eliminado",
                    icon: "success"
                  });
                  productosEnCarrito.splice(index, 1);

                  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
                  cargarProductosEnCarrito()
                }
              });

           
        })
    })
}


function BorrarProducto(indexX){

    productosEnCarrito.splice(indexX, 1);

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    cargarProductosEnCarrito()
}



function vaciarCarrito (){   
        botonVaciar.addEventListener("click",()=>{const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Realmente desea cancelar su compra?",
            text: "Se eliminarán todos los productos!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                productosEnCarrito.length = 0;
                localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))   
               cargarProductosEnCarrito();
              swalWithBootstrapButtons.fire({
                title: "Eliminados!",
                text: "Los productos fueron eliminados!",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Los productos no fueron eliminados!",
                icon: "error"
              });
            }
          });   
        })
 }

vaciarCarrito()



function sumarTotal(){
let prueba =  productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    precioTotal.innerText = prueba

let dolar 
precioDolar = fetch("https://dolarapi.com/v1/dolares/oficial")
.then(response => response.json())
.then(data =>{
     dolar = data.compra;
const conversionDolar = prueba / dolar
const totalUsd = conversionDolar.toFixed(2)

precioUsd.innerHTML = `US$ ${totalUsd}
     `    
})
}


function comprar(){
    botonComprar.addEventListener("click",()=>{
        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
        cargarProductosEnCarrito()
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoComprado.classList.remove("disabled");
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Su compra fue realizada con éxito. Muchas gracias!",
            showConfirmButton: false,
            timer: 2500
          });
        
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
            if(productosEnCarrito[indexX].cantidad > 1){
                productosEnCarrito[indexX].cantidad--
                localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
                cargarProductosEnCarrito()
            } else{
                Swal.fire({
                    title: "Quiere eliminar este producto?",
                    text: "El producto se elimina de su lista de compras",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, quiero eliminarlo!",
                    cancelButtonText: "No, no quiero eliminarlo"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        BorrarProducto(indexX) 
                      Swal.fire({
                        title: "Eliminado",
                        text: "El producto fue eliminado de la lista",
                        icon: "success"
                      }); 
                                   
                    }
                  });
              

            }
            
            
        })
    })
}

