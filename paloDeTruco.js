// Queremos escribir una función paloDeTruco, que dado un palo, devuelva una lista de strings, una por cada carta de ese palo según las cartas del truco:

// paloDeTruco("espadas")
// ["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
// Tomá en cuenta que las cartas de truco incluyen todas las numeradas del 1 al 12, excepto por los 8s y los 9s.

let tipoPalo = "espadas";

function paloDeTruco (tipoPalo){
    let paloADevolver = [];
    for (let i=1; i<=12; i++){
        if (i !== 8 && i !== 9){
            paloADevolver.push(i + " de " + tipoPalo);
        }
    }
    return paloADevolver;
}