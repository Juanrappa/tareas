


function numero_mas_chico(numeros){
    let chico = numeros[0]

    for (i=0 ;i < numeros.length;i++){
        if (chico > numeros[i]){
            chico = numeros[i] 
        }

        
    }
    return chico
}


function numero_mas_grande(numeros){
    let grande = numeros[0]

    for (i=0 ;i < numeros.length;i++){
        if (grande < numeros[i]){
            grande = numeros[i] 
        }

        
    }
    return grande
}


function calcular_promedio (numeros){
    let suma = 0

    for(i=0 ;i < numeros.length; i++){
        suma = suma + numeros[i]

    }

    promedio = suma / numeros.length
    return promedio
}


function numeros_repetidos(arr){
    let numero = 0
    let repeticiones = 0
    for(i= 0 ; i < arr.length - 1 ; i++){
        let aux = []
        for(j = i +1 ; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                aux.push(arr[i])
            }
        }
        if(aux.length > repeticiones ){
            repeticiones = aux.length
            numero = arr[i]
        }
    }
    return numero
}

const numeros = document.querySelectorAll("em")
const array_numeros = [].slice.call(numeros)
let array = []
for(i = 0; i < array_numeros.length; i++){
    array.push(Number(array_numeros[i].innerText))
}
const calcular = document.querySelector("#calcular")
let promedio = document.querySelector("#promedio")
let chico = document.querySelector("#chico")
let grande = document.querySelector("#grande")
let frecuente = document.querySelector("#frecuente")

calcular.onclick = function(){
    promedio.innerText = "el promedio es " + calcular_promedio(array)
    chico.innerText = "el numero mas chico es " + numero_mas_chico(array)
    grande.innerText = "el numero mas grande es " + numero_mas_grande(array)
    frecuente.innerText = "el numero mas frecuente es " + numeros_repetidos(array)
    return false
}

