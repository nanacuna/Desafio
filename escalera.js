// Queremos representar una escalera de altura variable, utilizando un array de strings.

// Por ejemplo, a una escalera de altura 3, la representamos con el siguiente array:

// var escalera3 = [
//     "  #",
//     " ##",
//     "###"
//   ]
// Y a una escalera de altura 5, de la siguiente forma:

// var escalera5 = [
//     "    #",
//     "   ##",
//     "  ###",
//     " ####",
//     "#####"
// ]

function escalera (altura){
    let array = [];
    let escalon = '';

    if (altura===0){
        return cantidadEscalones;
    }

    for (let i=1; i<=altura; i++){
        escalon = ' '.repeat(altura-i);
        escalon += '#'.repeat(i);

        array.push(escalon);
    }
    return array;
}

escalera(10);