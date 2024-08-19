let nombreUsuario = prompt("Ingresa tu nombre.");
console.log( "El nombre del usuario es " + nombreUsuario);

let pais = prompt("De que pais eres?");
alert("Bienvenidos/as!");

const contenedorProductos = document.querySelector("#contenedor-destinos");
const botonesCategorias = document.querySelectorAll(".botone-categoria");
function cargarProductos() {
    cargarProductos.forEach(producto=>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="images/IMG_20180306_221214.jpg" alt="">
                    <div class="paquetes-detallados">
                        <h3 class="producto">${producto.titulo}</h3>
                        <p class="tarifas">${producto.precio}</p>
                        <button><i class= "id="${producto.id}></i>AGREGAR</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton=> boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
    })
})
