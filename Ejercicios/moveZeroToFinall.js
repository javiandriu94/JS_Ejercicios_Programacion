const movezerotofinal = arr => {
    try {
        if(!Array.isArray(arr)) {
            throw new Error ('El parametro debe ser de  tipo arreglo')
        }
        if(arr.length === 0) {
            throw new Error ('El arreglo no puede estar vacio')
        }
        if(arr.some(item => typeof item !== 'number')){
            throw new Error ('El arreglo debe contener solo numeros')
        }   
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr.length-i-1; j++){
                if(arr[j]===0) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
        }
        return arr;
    }catch(e){
        console.error(`El mensaje de error es: ${e.message}`);
        return null
    }
}

console.log(movezerotofinal([1,4,0,3,0,2,3,3]))
console.log(movezerotofinal([1,4,0,3,0,'Maria',3,3]))
console.log(movezerotofinal('Hola'))