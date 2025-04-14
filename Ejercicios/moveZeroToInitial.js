const movezerotoinitial = (arr) => {
    try {
        if(!Array.isArray(arr)){
            throw new Error ('El parametro debe ser de tipo array')
        }
        if(arr.length === 0 ){
            throw new Error ('La longitud del array debe ser mayor a 0')
        }
        if(arr.some(e => typeof e !== 'number')){
            throw new Error ('Los elementos del array deben ser de tipo numero')
        }

        for(let i=0; i<arr.length; i++){
            for(let j=arr.length-1; j > 0 ; j--){
                if(arr[j] === 0){
                    let temp = arr[j]
                    arr[j] = arr[j-1]
                    arr[j-1]=temp
                }
            }
        }
        return arr
    }catch(e){
        console.error(`El mensaje de error es: ${e.message}`)
    }
}

console.log(movezerotoinitial([5,3,5,2,0,2,0,0]))