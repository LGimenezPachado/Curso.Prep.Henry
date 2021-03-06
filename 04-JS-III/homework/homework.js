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

  var tamaño = array.length;
  var ultimo = array[tamaño - 1];

  return ultimo;


}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  var tamaño = array.length;
  return tamaño;


}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:



  for (let i = 0; i < array.length; i++) {

    array[i] += 1;
  }
  return array;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  var frase = "";

  for (let i = 0; i < palabras.length; i++) {

    if (i == (palabras.length - 1)) {
      frase += palabras[i];
    } else {
      frase += (palabras[i] + ' ');
    }
  }

  return frase;


}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:


  for (let i = 0; i < array.length; i++) {

    if (elemento === array[i]) {
      return true;
    }
  }
  return false;

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  var total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];

  }

  return total;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var total = 0, promedio = 0;

  for (let i = 0; i < resultadosTest.length; i++) {

    total += resultadosTest[i];

  }

  promedio = (total / (resultadosTest.length));

  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var aux = numeros[0];

  for (let i = 0; i < numeros.length; i++) {

    if (aux < numeros[i]) {
      aux = numeros[i];
    }
  }

  return aux;

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  var total = 1;

  if (arguments.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      total *= arguments[i];
    }
    return total;
  }

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
