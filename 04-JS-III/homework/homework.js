// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  var numerouno = array[0];
  return numerouno;

}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  var tamaño = length(array);
  var ultimo = array[tamaño - 1];

  return ultimo;


}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  var tamaño = length(array);
  return tamaño;


}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:



  for (let i = 0; i > 0; i++) {

    array[i] = i + 1;
  }

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  var matriz1 = array.push(elemento);
  return matriz1;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  var matriz2 = array.unshift(elemento);
  return matriz2;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var tamaño = length(dePalabrasAFrase);
  var frase = "";

  for (let i = 0; i < tamaño; i++) {

    frase += array[i] + ' ';
  }

  return frase;


}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var tamaño = length(array);
  var existe;

  for (let i = 0; i < tamaño; i++) {

    existe = array[i];
    
    if (elemento = existe) {
      return true;
    }
  }

  return false;

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  const arrayInt;

  var tamaño = length(arrayInt);
  var total = 0;

  for (let i = 0; i < tamaño; i++) {
    total += arrayInt[i];

  }

  return total;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  const arrayRes;

  var tamaño = length(arrayRes);
  var total = 0; promedio = 0;

  for (let i = 0; i < tamaño; i++) {

    total += arrayRes[i];

  }

  promedio = (total / tamaño);

  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:


}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
