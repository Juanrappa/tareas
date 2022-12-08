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
            numero_menor = arr[i];
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
    return array;

};
function convertirEnArrayDeNumeros(array){
    let numeros = [];
    for(i = 0 ; i < array.length ; i++){
        numeros.push(Number(array[i]));
    }
    return numeros;
}
function generarInputs(){
    

        const input= document.createElement("input");
        input.id = `input`;
        input.type = `number`;
        const label = document.createElement(`label`);
        label.htmlfor = `input`;
        label.innerHTML = `sueldo`;
        const li = document.createElement(`li`);
        li.appendChild(label);
        li.appendChild(input);
        container.appendChild(li);
        
    
};
function eliminarInputs(){
    container.removeChild(container.lastElementChild);
};

function elininarCeros(array){
    let arraySinCeros = [];
    for(i = 0; i < array.length;i++ ){
        if(array[i] > 0){
            arraySinCeros.push(array[i]);
        };
    };
    return arraySinCeros;
};
function generarInputsVacios(){
    let texto = [`el sueldo mas alto es `,`el sueldo mas bajo es`,`el promedio de los sueldos es`];

    for(i = 0 ; i < 3 ; i++){
        const label_i = document.createElement(`label`);
     label_i.htmlFor = `input${i}`;
     label_i.innerHTML = `${texto[i]}`;
     container.appendChild(label_i);   
    const input_i = document.createElement("input");
    input_i.id = `input${i}`;
    input_i.disabled = true;
    const li_i = document.createElement("li");
    li_i.appendChild(input_i);
    container.appendChild(li_i);
    
    };

};


const container = document.querySelector(`#container`);

document.querySelector(`#agregar`).onclick = function(){
    generarInputs();
    return false;
};

document.querySelector(`#quitar`).onclick = function(){
    eliminarInputs();
    return false;
};

document.querySelector(`#calcular`).onclick = function(){
    const sueldos = document.querySelectorAll(`#input`);
    const arraySueldo = elininarCeros(convertirEnArrayDeNumeros(nodelistArray(sueldos)));
    generarInputsVacios();
    document.querySelector(`#input0`).value = mayor(arraySueldo);
    document.querySelector(`#input1`).value = menor(arraySueldo);
    document.querySelector(`#input2`).value = promedio(arraySueldo);
    return false;
};