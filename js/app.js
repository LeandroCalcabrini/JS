const carrito = [];
const shopContent = document.getElementById("shopContent");
/* const botonMalbec = document.getElementById("Malbec");
const botonCabernet = document.getElementById("Cabernet Sauvignon");
const botonMerlot = document.getElementById("Merlot"); */

const botonTodos = document.getElementById("todos")
const botonVarietal = document.querySelectorAll(".boton-varietal");
const botonBodega = document.querySelectorAll(".boton-bodega");
const botonVariedad = document.querySelectorAll(".boton-variedad");
const botonRangoPrecio = document.getElementById(".buscar-rango");
const titulo = document.querySelector("#titulo-principal");



const minimo = document.getElementById(".precio-minimo");
const maximo = document.getElementById(".precio-maximo"); 


function cargarProductos(productosElegidos){
    shopContent.innerHTML = "";

    productosElegidos.forEach((producto) => {
        let contenido = document.createElement("article");
        contenido.className = "articulo";
        contenido.innerHTML =  `
        <h3>${producto.nombre + " " +producto.varietal}</h3>
        <img src ="${producto.imagen}">
        <p class="precio">$ ${producto.precio} </p>
        <button class="boton-agregar" id="${producto.id}">Agregar al Carrito</button>
        `;
    
        shopContent.append(contenido);

/*         contenido.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))       */
    })
let botonAgregarCarrito = document.querySelectorAll(".boton-agregar");

botonAgregarCarrito.forEach(boton =>{
    boton.addEventListener("click",agregarAlCarrito)
})
}

cargarProductos(productos);



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
    }
    

filtrar()





function agregarAlCarrito(e){
    const idBotonAgregar = e.currentTarget.id;
    console.log(idBotonAgregar)
  
    const productoAgregado = productos.find(producto => producto.id === idBotonAgregar);
    console.log(productoAgregado)
  
}




