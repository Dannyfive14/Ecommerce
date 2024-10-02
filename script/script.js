//Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners()

//functions

function cargarEventListeners(){
    //Cuando agregas un producto presionando "agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);

    //Elimina los productos del carrito
    carrito.addEventListener('click', eliminarProducto);

    //Vacia el carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];//Resetear el arreglo

        limpiarHTML();//Eliminar todo el HTML
    });

}

function agregarProducto (e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCarrito(productoSeleccionado);
    }
}

function eliminarProducto(e){
    if(e.target.classList.contains('borrar-producto')){
        const productoId = e.target.getAttribute('data-id');

        //Elimina el arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
    }else{
    }
}

//Lee el copntenido HTML

function leerDatosCarrito (producto){
    console.log(producto);

    //Crear un objeto
    const infoproducto = {
        imagen: producto.querySelector('img').src ,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio p').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //revisa si un elemento ya esta en el carrito
    const existe = articulosCarrito.some( producto => producto.id === infoproducto.id );
    
    if(existe){
        const productos = articulosCarrito.map( producto => {
            
            if(producto.id === infoproducto.id){
                producto.cantidad++;
                return producto;
            }else{
                return producto;
            }
        });
        
        articulosCarrito = [...productos];
    }else{
        articulosCarrito = [...articulosCarrito, infoproducto];
    }



    //Agrega elementos al arreglo de carrito
    
    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en HTML

function carritoHTML(){

    //Limpiar HTML
    limpiarHTML();

    //recorre el carrito y genera el HTL
    
    articulosCarrito.forEach(producto =>{
        const { imagen, titulo, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `

            <td>  
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}" > X </a> 
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })

    
}

//eliminar productos

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
