
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
     container2.appendChild(label_i);   
    const input_i = document.createElement("input");
    input_i.id = `input${i}`;
    input_i.disabled = true;
    const li_i = document.createElement("li");
    li_i.appendChild(input_i);
    container2.appendChild(li_i);
    
    };

};

function colocarName(){
    const inputs = document.querySelectorAll("#input")
    for(i = 0 ; i < inputs.length; i++){
        inputs[i].name = `input${i}`
    }
}

function agarrarInputsVacios(){
    let inputs = []

    for(i = 0;i < 3; i++){
        inputs.push(document.querySelector(`#input${i}`))
    }

    return inputs
}

function borrarInputsVaciosAnteriores(){
    const inputs = agarrarInputsVacios()
    if(inputs[0] !== null){
        for(i = 0 ; i < 3 ; i++){
            container2.removeChild(container2.lastChild)
            }
    }
   
}

const container2 = document.querySelector("#container2")
const container = document.querySelector(`#container`);
const $form = document.querySelector("#form")

document.querySelector(`#agregar`).onclick = function(){
    generarInputs();
    colocarName()
    return false;
};

document.querySelector(`#quitar`).onclick = function(){
    eliminarInputs();
    return false;
};

document.querySelector(`#calcular`).onclick = function(){
    const sueldos = document.querySelectorAll(`#input`);
    const arraySueldo = elininarCeros(convertirEnArrayDeNumeros(nodelistArray(sueldos)));
    borrarInputsVaciosAnteriores()
    validarForm()
    generarInputsVacios();
    document.querySelector(`#input0`).value = mayor(arraySueldo);
    document.querySelector(`#input1`).value = menor(arraySueldo);
    document.querySelector(`#input2`).value = promedio(arraySueldo);
    return false;
};