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

function esEntero(numero){
    if(numero % 1 === 0){
        return true
    }
    else{
        return false
    }
}