
function generarInputs(){
    
    for(i = 0 ; i < $people.value ; i++){
        const input_i = document.createElement("input")
        const li_i = document.createElement(`li`)
        li_i.id = `li`
        input_i.id = `input`
        input_i.name = `input${i}`
        input_i.type = `number`
        li_i.appendChild(input_i)
        $lista.appendChild(li_i)
        
    }
}

function generarInputsVacios(){
    const $lista2 = document.querySelector("#lista2")
    for(i = 0 ; i < 3 ; i++){
        const inputs_i = document.createElement("input")
        const lii_i = document.createElement(`li`)
        inputs_i.id = `input${i}`
        inputs_i.disabled = true
        lii_i.appendChild(inputs_i)
        $lista2.appendChild(lii_i)
        
    }
}

function borrarInputsAnteriores(){
    const inputs = document.querySelectorAll("#input")
    if(inputs.length > 0){
        for(i = 0 ; i < inputs.length ; i++){
            $lista.removeChild($lista.lastChild)
        }
    }
}

function borrarInputsVacios(){
    let inputs = []
    for(i = 0; i < 3 ; i++){
        inputs.push(document.querySelector(`#input${i}`))
    }

    if(inputs.length > 0 && inputs[0] !== null){
        for(i = 0 ; i < inputs.length ; i++){
            $lista2.removeChild($lista2.lastChild)
        }
    }
}
const $container = document.querySelector("#container")
const $lista = document.querySelector("#lista")
const $people = document.querySelector("#personas")
const $lista2 = document.querySelector("#lista2")
const $form = document.querySelector(`#form`)


document.querySelector("#generar").onclick = function(event){
    borrarInputsAnteriores()
    validarFormPersonas()
    generarInputs()
    
    $lista.className = ""
   
    event.preventDefault()
}

document.querySelector("#calcular").onclick = function(){
    borrarInputsVacios()
    let array = document.querySelectorAll("#input")
    let arrayEdades = convertirEnArrayDeNumeros(nodelistArray(array))
    validarFormEdades()
    generarInputsVacios()
    const inputA = document.querySelector(`#input0`)
    const inputB = document.querySelector(`#input1`)
    const inputC = document.querySelector(`#input2`)

    inputA.value = mayor(arrayEdades)
    inputB.value = menor(arrayEdades)
    inputC.value = promedio(arrayEdades)

    
    return false
}







//generar inputs con name distintos
//utilizar un for y un queryselector para tomarlos y guardarlos en un array


