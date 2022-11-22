

const juntar = document.querySelector("#juntar")

juntar.onclick = function(){

    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value

    document.querySelector("#titulo").innerText = "bienbenido " + nombre

    return false
}