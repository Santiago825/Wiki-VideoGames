const imagen = document.getElementById("imagen")

fetch("https://www.cheapshark.com/api/1.0/games?id=9")
    .then(res=>res.json())
    .then(data=>{console.log(data.info.title)
        imagen.src=data.info.thumb
    })
    .catch(e=>console.log(e))

