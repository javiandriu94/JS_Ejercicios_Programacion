const reversedNumber = num => {
    let reversed = 0; 
    try {
        if(typeof num !== 'number') {
            throw new Error('El parametro ingresado debe ser de tipo numero')
        }
        if ( num <= 0){
            throw new Error ('El numero debe ser mayor a 0')
        };

        while(num>0){
            reversed = reversed * 10 + (num%10)
            num = Math.floor(num/10)
        }
        return reversed;

    }catch(e){
        console.error(`El mensaje de error es: ${e.message}`)
    }
}

console.log(reversedNumber(16272))
console.log(reversedNumber('Maria'))