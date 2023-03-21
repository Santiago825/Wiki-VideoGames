class comentariol {
    constructor(id, usuario, comentario) {
        this.id = id;
        this.usuario = usuario;
        this.comentario = comentario;

    }
    agregar() {
        console.log("clase");
        const comentario = {
            id: this.id,
            usuario: this.usuario,
            comentario: this.comentario,
        }
        comentarios.push(comentario)
        console.log(comentarios);
        return comentarios;
    }
    delete() {
        for (let [i, value] of comentarios.entries()) {
            if (value.id == this.id) {
                comentarios.splice(i, 1)
            }
        }
        return comentarios;

    }
    editar() {
        console.log(this.id+" "+this.usuario+" "+this.comentario);
        const fila={
            id:this.id,
            usuario:this.usuario,
            comentario:this.comentario
        }

        for(let [i, value] of comentarios.entries()){
            if(value.id == this.id){
                comentarios[i]=fila
            }
        }
        return comentarios;

    }


}