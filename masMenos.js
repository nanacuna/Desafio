// Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:

// En la primera posición, la fracción de números que son positivos
// En la segunda posición, la fracción de números que son cero
// En la última posición, la fracción de números que son negativos
// Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 
//25% de ceros, y 25% de negativos.

let array = [1, 0, -5, 9];

function masMenos (array){
    let arrayFraccion = [];
    let fraccionPositivos = 0;
    let fraccionCero = 0;
    let fraccionNegativos = 0;
    let largoArray = array.length;

    for (let i=0; i<largoArray; i++){
        if (array[i] > 0){
            fraccionPositivos++;
        }
        else if (array[i] === 0){
            fraccionCero++;
        }
        else{
            fraccionNegativos++;
        }
    }
    arrayFraccion.push(fraccionPositivos/largoArray);
    arrayFraccion.push(fraccionCero/largoArray);
    arrayFraccion.push(fraccionNegativos/largoArray);

    return arrayFraccion;
}


masMenos(array);