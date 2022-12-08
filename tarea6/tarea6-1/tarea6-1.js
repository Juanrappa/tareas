function mayor(arr){
    let numero_mayor = 0;
    for(i = 0;i < arr.length; i++){
        if(arr[i] > numero_mayor){
            numero_mayor = arr[i];
        };
    };
    return numero_mayor;
};

function menor(arr){
    let numero_menor = arr[0];
    for(i = 0; i < arr.length; i++){
        if(numero_menor > arr[i]){
            numero_menor = arr[i]
        };
    };
    return numero_menor;
};

function promedio(arr){
    let suma = 0;
    for(i = 0 ; i < arr.length ; i++){
        suma = suma + arr[i];
    };
    return suma / arr.length;
};

function nodelistArray(node){
    let array = [];
    for(i = 0 ; i < node.length ; i++){
        array.push(node[i].value);
    };
    return array

};
function convertirEnArrayDeNumeros(array){
    let numeros = []
    for(i = 0 ; i < array.length ; i++){
        numeros.push(Number(array[i]))
    }
    return numeros
}
function generarInputs(){
    
    for(i = 0 ; i < personas.value ; i++){
        const input_i = document.createElement("input")
        input_i.id = `inputp`
        input_i.type = `number`
        const input2_i = document.createElement("li")
        input2_i.appendChild(input_i)
        lista.appendChild(input2_i)
    }
}
function generarInputsVacios(){
    for(i = 0 ; i < 3 ; i++){
    const input_i = document.createElement("input")
    input_i.id = `input${i}`
    input_i.disabled = true
    const input2_i = document.createElement("li")
    input2_i.appendChild(input_i)
    lista2.appendChild(input2_i)
    
    };

};
const container = document.querySelector("#container")
const lista = document.querySelector("#form")
const personas = document.querySelector("#personas")
const lista2 = document.querySelector("#form2")



document.querySelector("#generar").onclick = function(){
    generarInputs()
    return false
}

document.querySelector("#calcular").onclick = function(){
    node = document.querySelectorAll(`#inputp`)
    array = nodelistArray(node)
    array1 = convertirEnArrayDeNumeros(array)
    
    generarInputsVacios()
    input0 = document.querySelector(`#input0`)
    input1 = document.querySelector(`#input1`)
    input2 = document.querySelector(`#input2`)

    input0.value = mayor(array1)
    input1.value = menor(array1)
    input2.value = promedio(array1)
    return false
}

