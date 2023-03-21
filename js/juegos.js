function crearCard(titulo, img, valor) {
    const container = document.getElementById("container_cards");
    const containerfondo = document.getElementById("container_fondo");
    const card = document.createElement("div");
    card.classList.add("card")
    container.appendChild(card)
    const imagenContenedor = document.createElement("div");
    imagenContenedor.classList.add("imagen");
    const imagen = document.createElement("img");
    imagen.src = img
    card.appendChild(imagenContenedor)
    imagenContenedor.appendChild(imagen)
    const description = document.createElement("p");
    description.innerText = titulo
    const precio = document.createElement("span");
    precio.innerText = valor
    card.appendChild(description);
    card.appendChild(precio)

}
const juegosPrincipal = () => {

    for (let i = 1; i < 2; i++) {
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${i}`)
            .then(res => res.json())
            .then(data => {
                const datas = data
                console.log(datas.info.title)
                if (datas.info.title != undefined) {
                    crearCard(datas.info.title, datas.info.thumb, data.cheapestPriceEver.price)
                }

            }).catch(e => {
                console.log(e)
            })
    }

}

juegosPrincipal()

function buscar(value) {
    console.log(value)
    const container = document.getElementById("container_cards");
    const containerfondo = document.getElementById("container_fondo");
    containerfondo.removeChild(container);

    const conta = document.createElement("div");
    conta.classList.add("container_cards")
    conta.setAttribute("id", "container_cards");
    containerfondo.appendChild(conta)
    value.trim();

    if (value != "") {


        fetch(`https://www.cheapshark.com/api/1.0/games?title=${value}`)
            .then(res => res.json())
            .then(data => {

                data.map(data => {

                    crearCard(data.external, data.thumb, 5000)

                })
            })

    } else {
        juegosPrincipal()
    }


}





