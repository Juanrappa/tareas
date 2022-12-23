
function validarPersonas(people){

    if(people == 0){
        return`debe escrivir cuantas personas viven en la casa`
    }
    if(!/^[0-9\-]+$/.test(people)){
       return `la cantidad de personas no puede tener decimales`
    }

    if(people < 0){
        return `la cantidad de personas no puede ser un numero nagativo`
    }
    else{
        return "" 
    }
}

function validarEdad(people){

    if(people == 0){
        return`debe escrivir las edades`
    }
    if(!/^[0-9\-]+$/.test(people)){
       return `la edad no puede tener decimales`
    }

    if(people < 0){
        return `la edad no puede ser un numero nagativo`
    }
    else{
        return "" 
    }
}


function validarFormPersonas(){
    const $form = document.querySelector("#form")
    const people = document.querySelector("#personas")

    const errorPeople = validarPersonas(people.value)

    const errores ={
        people: errorPeople
    }
    
    manejarErrores(errores)

   
}

function validarFormEdades(){
    let array = document.querySelectorAll("#input")
    let arrayEdades = convertirEnArrayDeNumeros(nodelistArray(array))

    const errores = {

    }

    for(i = 0 ; i < arrayEdades.length ; i++){
        errores[`input${i}`] = `${validarEdad(arrayEdades[i])}`
    }

    
    manejarErroresEdad(errores)
}

function manejarErrores(errores){
    const keys = Object.keys(errores)
    const $errores = document.querySelector("#errores")
    const $erroesli = document.querySelectorAll("#errorli")
    const $form = document.querySelector("#form")
    
    if($erroesli.length > 0){
        for(i = 0 ; i < $erroesli.length ; i++){
            $errores.removeChild($errores.lastChild)
        }
    }

    keys.forEach(function(key){
        const error = errores[key]

        if(error){
            $form[`${key}`].className = "error"

            const $error = document.createElement(`li`)
            $error.id = "errorli"
            $error.innerText = error
            $errores.appendChild($error)
        
        }
        else{
            $form[`${key}`].className = ""
        }
    })
}

function manejarErroresEdad(errores){
    const keys = Object.keys(errores)
    const $errores = document.querySelector("#erroresEdades")
    const $errorEdad = document.querySelectorAll("#errorEdad")
    const $form = document.querySelector("#form")

    if($errorEdad.length > 0){
        for(i = 0 ; i < $errorEdad.length ; i++){
            $errores.removeChild($errores.lastChild)
        }
    }
    
   const error = errores[keys[0]]
    if(error){
    $form[keys[0]].className = "error"

    const $errorA = document.createElement(`li`)
    $errorA.id = "errorEdad"
    $errorA.innerText = error
    $errores.appendChild($errorA)

    }
    else{
    $form[keys[0]].className = ""
    }

    for(i = 0 ; i < keys.length - 1; i++){
        if(errores[keys[i + 1]]){
            $form[keys[i + 1]].className = "error"

            if(errores[keys[i + 1]] !== errores[keys[i]]){
               
            const $error_i = document.createElement(`li`)
            $error_i.innerText = errores[keys[i + 1]]
            $errores.appendChild($error_i)
            }
        }
        else{
            $form[keys[i + 1]].className = ""
        }
    }

    
}

