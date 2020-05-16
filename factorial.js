// Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.


function factorial (num){
    let resultado = 1;

    for (let i=1; i<=num; i++){
        resultado *= i;
    }
    return resultado;
}

factorial(5);