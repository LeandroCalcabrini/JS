let carrito = [];

const shopContent = document.getElementById("shopContent");
const botonMalbec = document.getElementById("Malbec");
const botonCabernet = document.getElementById("Cabernet Sauvignon");
const botonMerlot = document.getElementById("Merlot");

const varietalMalbec = botonMalbec.id;
const varietalCabernet = botonCabernet.id;




const botonVarietal = document.querySelectorAll(".boton-varietal");
const botonBodega = document.querySelectorAll(".boton-bodega");
const botonVariedad = document.querySelectorAll(".boton-variedad")


function cargarProductos(productosElegidos){
    shopContent.innerHTML = "";

    productosElegidos.forEach((producto) => {
        let contenido = document.createElement("article");
        contenido.className = "articulo";
        contenido.innerHTML =  `
        <h3>${producto.nombre + " " +producto.varietal}</h3>
        <img src ="${producto.imagen}">
        <p class="precio">$ ${producto.precio} </p>
        <button>Agregar al Carrito</button>
        `;
    
        shopContent.append(contenido);
        contenido.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))      
    })
}

cargarProductos(productos);


botonVarietal.forEach(boton => {
    boton.addEventListener("click",(e)=>{
        const varietalesElegidos = productos.filter(producto => producto.varietal === e.currentTarget.id)
        cargarProductos(varietalesElegidos);
    })
})



botonBodega.forEach(boton =>{
    boton.addEventListener("click",(e)=>{
        const bodegaElegida = productos.filter(producto => producto.bodega === e.currentTarget.id)
        cargarProductos(bodegaElegida);

    })
})

botonVariedad.forEach(boton =>{
    boton.addEventListener("click",(e) =>{
        const variedadElegida = productos.filter(producto => producto.variedad === e.currentTarget.id)
        cargarProductos(variedadElegida)
    })
})