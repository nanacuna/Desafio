// Una profesora de programación, cansada de que los estudiantes lleguen tarde, decidió que va a cancelar la 
//clase si hay pocos presentes.

// Ella representa a los ingresos de los estudiantes como un array de tiempos de llegada tarde, en minutos.
//Por ejemplo, si un estudiante llegó 10 minutos tarde, otro 5 minutos antes de hora, otro 3 minutos tarde, y otro puntual, lo representa así:

// var ingresosDelLunes = [10, -5, 3, 0];
// Con esta información y la cantidad de estudiantes mínimos para abrir el curso, la profesora 
//quiere saber si la clase se abre. Por ejemplo, suponiendo que la cantidad minima de estudiantes para que la clase se de es 2, el curso del lunes se abre, porque hubo un estudiante que llegó puntual y un estudiante que llegó temprano.

// seAbre(ingresosDelLunes, 2)
// true
// Pero si la cantidad mínima fuera 3, la clase no se abriria:

// seAbre(ingresosDelLunes, 3)
// false
// Escribi las siguientes funciones:

// seAbre, que dice si se hace una clase dado el array de ingresos
// aperturas, que toma un array con los arrays de ingresos de varios días, y la cantidad mínima de estudiante, 
//y diga que dias se abrió y que días no. Por ejemplo:
// aperturas([ingresosDelLunes, ingresosDelMartes, ingresosDelMiercoles], 2)
// [true, false, false]

let ingresos = [10, -5, 8, 20, 0];
let ingresosLunes= [5, 1, 0, -7, 3];
let ingresosMartes= [5, -1, -10, -7, 3];
let ingresosMiercoles= [5, -1, 10, -7, 3];
let arrayDeArrays = [];

arrayDeArrays.push(ingresosLunes);
arrayDeArrays.push(ingresosMartes);
arrayDeArrays.push(ingresosMiercoles);

function seAbre (ingresos, cantMinima){
    let ingresosATiempo = 0;
    for (let i=0; i<ingresos.length; i++){
        if (ingresos[i] <= 0){
            ingresosATiempo++;
        }
    }
    return ingresosATiempo >= cantMinima;
}

function aperturas (arrayDeArrays,cantEstudiantes){
    let diasCursoAbierto = [];

    for (let i=0; i<arrayDeArrays.length; i++){
        diasCursoAbierto.push(seAbre(arrayDeArrays[i], cantEstudiantes));
    }
    return diasCursoAbierto;
}


aperturas(arrayDeArrays, 3);