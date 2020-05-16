// Necesitamos una función productoria que reciba un array de números y devuelva su productoria. 
//La productoria es el resultado de multiplicar todos sus elementos entre ellos.

// Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.


let array = [5, 10, 1];

function productoria (array){
    let resultado = 1;
    for (let i=0; i<array.length; i++){
        resultado *= array[i];
    }
    return resultado;
}

productoria(array);