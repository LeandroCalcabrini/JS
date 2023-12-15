
const shopContent = document.getElementById("shopContent");

const botonTodos = document.getElementById("todos");
const botonVarietal = document.querySelectorAll(".boton-varietal");
const botonBodega = document.querySelectorAll(".boton-bodega");
const botonVariedad = document.querySelectorAll(".boton-variedad");
const botonRangoPrecio = document.querySelector("#buscar-rango")
const titulo = document.querySelector("#titulo-principal");
const numerito = document.querySelector("#cuenta-carrito");

const minimo = document.querySelector("#precio-minimo");
const maximo = document.querySelector("#precio-maximo");
const aside = document.getElementById("aside");

let carrito


function cargarProductos(productosElegidos){
    shopContent.innerHTML = "";
    productosElegidos.forEach((producto) => {
        let contenido = document.createElement("article");
        contenido.className = "articulo";
        contenido.innerHTML =  `
        <h3>${producto.nombre + " " +producto.varietal}</h3>
        <img src ="${producto.imagen}">
        <div id="precio-container">
        <p id="${producto.id}" class="pesos-precio">$ ${producto.precio} </p>
        <strong id="${producto.id}"class="precio-dolar"></strong>
        </div>
        <button class="boton-agregar" id="${producto.id}">Agregar al Carrito</button>
        `;
        shopContent.append(contenido);
    })


    let botonAgregarCarrito = document.querySelectorAll(".boton-agregar");
    botonAgregarCarrito.forEach(boton =>{
        boton.addEventListener("click",(e) => {
            const idBotonAgregar = e.currentTarget.id;
            const productoAgregado = productos.find(producto => producto.id === idBotonAgregar);  
            if (carrito.some(producto => producto.id === idBotonAgregar)){
                const index = carrito.findIndex(producto =>producto.id === idBotonAgregar);
                carrito[index].cantidad++;
            }else{
                productoAgregado.cantidad = 1;
                carrito.push(productoAgregado);
            }

         actualizarNumerito()
         localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))


         Toastify({
            text: "Nuevo producto agregado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #56070C, #5F0F40)",
            },

          }).showToast();
                
        })
    })
}


function filtrar(){
        botonVarietal.forEach(boton => {
            boton.addEventListener("click",(e)=>{
                
                const varietalesElegidos = productos.filter(producto => producto.varietal === e.currentTarget.id);
                cargarProductos(varietalesElegidos);
                titulo.innerText = e.currentTarget.id;
            })
        })
        
        botonBodega.forEach(boton =>{
            boton.addEventListener("click",(e)=>{
                const bodegaElegida = productos.filter(producto => producto.bodega === e.currentTarget.id);
                cargarProductos(bodegaElegida);
                titulo.innerText = e.currentTarget.id;
            })

        })
        
        botonVariedad.forEach(boton =>{
            boton.addEventListener("click",(e) =>{
                const variedadElegida = productos.filter(producto => producto.variedad === e.currentTarget.id);
                cargarProductos(variedadElegida)
                titulo.innerText = e.currentTarget.id;
            })
        }) 
        
        botonTodos.addEventListener("click",()=>{
            cargarProductos(productos)
            titulo.innerText = "Todos los productos";
        })

        botonRangoPrecio.addEventListener("click",()=>{
            let rangoPrecio = productos.filter(producto => producto.precio >= minimo.value && producto.precio <= maximo.value)
            cargarProductos(rangoPrecio)
           
            let consulta = rangoPrecio.length
            if (consulta === 0){
                titulo.innerHTML = "";
                shopContent.innerHTML =` 
                <p id="mensaje-no-producto">Lo siento, no hay ningun producto con esas caracteristicas <i class="bi bi-emoji-frown"></i></p>
                `
            }

        }) 
}



function actualizarNumerito(){
let Nuevonumerito = carrito.reduce((acc, producto) => acc + producto.cantidad,0);

numerito.innerText = Nuevonumerito;
}


function botonBurgerMenu (){
    const burgerMenu = document.getElementById("burger-menu");
burgerMenu.addEventListener("click",()=>{
    aside.classList.toggle("active");
})
}


function carritoEnLocalStorage(){
const carritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if(carritoLS){
    carrito = carritoLS
    actualizarNumerito()
}else{
    carrito = []
}
}


cargarProductos(productos);

carritoEnLocalStorage();

filtrar();

botonBurgerMenu();