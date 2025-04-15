const reversedString = word => {
    let reversed = '';
    try {
        if(typeof word !== 'string'){
            throw new Error ('El parametro debe ser de tipo string')
        }
        if (word.trim() === '') {
            throw new Error('El string no puede estar vacío');
        }
        for(let i=word.length-1; i >=0; i-- ) {
            reversed += word[i]
        }
        return reversed
    }catch(e){
        console.error(`El mensaje de error es: ${e.message}`)
    }
}

console.log(reversedString('hola'))