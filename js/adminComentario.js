
const modal = document.getElementById("container_fondo")
const modalEdit = document.getElementById("container_fondo_Edit")
const jComentarios = comentarios

const nombre = document.getElementById("nombreEdit")
const comenta = document.getElementById("comentarioEdit")
var info = {}

function mostrarComen(jComentarios) {
    const tabla = document.getElementById("tabla")
    const tbodys = document.getElementById("tbody")
    tabla.removeChild(tbodys)
    const tbody = document.createElement("tbody")
    tbody.setAttribute("id", "tbody");
    jComentarios.map(data => {

        const fila = document.createElement("tr")
        fila.setAttribute("id", data.id)
        const nombre = document.createElement("td")
        nombre.innerText = data.usuario
        const comentario = document.createElement("td")
        comentario.innerText = data.comentario
        fila.appendChild(nombre)
        fila.appendChild(comentario)
        const opcion = document.createElement("td");


        opcion.innerHTML = `<div class="contenedor_opc"><a onclick='handleModalEdit(${JSON.stringify(data)})'><i class='fa-regular fa-pen-to-square'></i></a><a onclick='eliminar(${JSON.stringify(data)})'><i class='fa-solid fa-trash'></i><a></div>`
        fila.appendChild(opcion)
        tbody.appendChild(fila)
        tabla.appendChild(tbody)


    })

}
mostrarComen(jComentarios);



function handleModal() {
    console.log(modal);
    nombre.innerText = ""
    comentario.innerText = ""

    modal.style.display = "flex"
    document.body.style.overflow="hidden"
}

function handleModalClose() {
    modal.style.display = "none"
    modalEdit.style.display = "none"
    document.body.style.overflow="scroll"
}
function handleModalEdit(data) {

    modalEdit.style.display = "flex"
    nombre.value = data.usuario
    comenta.value = data.comentario
    info = data;
    document.body.style.overflow="hidden"
}

function agregar() {
    const id = comentarios.length + 1;
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
    let coment = new comentariol(id, nombre, comentario)
    let salida = coment.agregar();
    nombre.value = ""
    comentario.value = ""

    handleModalClose()
    mostrarComen(salida)
    alertSweet("Ok", "Elemento Agregado exitosamente", "success");

}
function eliminar(data) {

    let coment = new comentariol(data.id, data.usuario, data.comentario)
    let salida = coment.delete()
    mostrarComen(salida)
    alertSweet("Ok", "Elemento eleminado exitosamente", "success")

}
function editar() {
    let coment = new comentariol(info.id, nombre.value, comenta.value)
    let salida = coment.editar()
    mostrarComen(salida)
    handleModalClose()
    alertSweet("Ok", "Elemento Modificado exitosamente", "success")
}

function alertSweet(ok, msg, icon) {
    Swal.fire(
        ok,
        msg,
        icon
    )
}








