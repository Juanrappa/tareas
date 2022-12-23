function validarSueldo(sueldo){

    if(sueldo === 0){
        return`debe escrivir el sueldo`
    }
    
    if(sueldo < 0){
        return `el sueldo no puede ser negativo`
    }
    else{
        return "" 
    }
}

function validarForm(){
    const array = document.querySelectorAll("#input")
    const suledos = convertirEnArrayDeNumeros(nodelistArray(array))

    const errores = {}

    for(i= 0; i < suledos.length; i++){
        errores[`input${i}`] = `${validarSueldo(suledos[i])}`
    }

    manejarErrores(errores)
}


function manejarErrores(errores){
    const keys = Object.keys(errores)
    const $errores = document.querySelector("#errores")
    const $errorSueldo = document.querySelectorAll("#errorSueldo")
    const $form = document.querySelector("#form")

    if($errorSueldo.length > 0){
        for(i = 0 ; i < $errorSueldo.length ; i++){
            $errores.removeChild($errores.lastChild)
        }
    }
    
    const error = errores[keys[0]]
    
    if(error){
    $form[keys[0]].className = "error"

    const $errorA = document.createElement(`li`)
    $errorA.id = "errorSueldo"
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