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
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== curosId);
    }else{
    }
}