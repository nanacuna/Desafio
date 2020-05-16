// Los árboles utópicos crecen de una forma particular, en dos ciclos:
// Cada primavera duplican su tamaño
// Cada verano crecen un metro
// Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?

// Algunos ejemplos:

// Si N = 0, su altura será 1 metro (no creció nada)
// Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
// Si N = 2, su altura será de 3 metros (creció un metro más en verano)
// Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
// y así ...


function alturaArbolUtopico (ciclosCrecimiento){
    let alturaArbol = 1;
    
    for (let i=1; i<=ciclosCrecimiento; i++){
        if (i % 2 === 0){
            alturaArbol +=  1;
        }
        else{
            alturaArbol *= 2;
        }
    }
    return alturaArbol;
}

alturaArbolUtopico(4);