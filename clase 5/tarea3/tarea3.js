const juntar = document.querySelector("#calcular")

juntar.onclick = function(){
    const horas = document.querySelector("#horas").value
    const minutos = document.querySelector("#minutos").value
    const segundos = document.querySelector("#segundos").value

    document.querySelector("#resultado").value = horas + "horas con " + minutos + " minutos y " + segundos + " segundos"

    return false
}