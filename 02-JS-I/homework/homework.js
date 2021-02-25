// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
//const nuevaString = null;
const nuevaString = "variable";

// Crea una variable numérica, puede ser cualquier número:
//const nuevoNum = null;
const nuevoNum = 94;

// Crea una variable booleana:
//const nuevoBool = null;
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
//const nuevaResta = 10 - null === 5;
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
//const nuevaMultiplicacion = 10 * null === 40 ;
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
//const nuevoModulo = 21 % 5 === null;
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:

  var chain = str;
  return chain;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  var res = x + y;
  return res;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:

  var res2 = x - y;

  return res2;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:

  var res3 = x * y;

  return res3;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

  var res4 = x / y;

  return res4;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:

  if (x == y) {
    return true;
  } else return false;



}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:


  if (str1.length === str2.length) {
    return true;
  } else {
    return false
  };
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num < 90) {
    return true;
  } else return false;
}


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num > 50) {
    return true;
  } else return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

  var resto = x % y;

  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num % 2 == 0) {
    return true;
  } else return false;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

  if (num & 2 != 0) {
    return true;
  } else return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:

  var cuadrado = Math.pow(num, 2);

  return cuadrado;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:

  var cubo = Math.pow(num, 3)

  return cubo;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

  var exponente = Math.pow(num, exponent);

  return exponente
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

  var redondeo = Math.round(num);
  return redondeo;
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:

  var redondeoArriba = Math.ceil(num);
  return redondeoArriba;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  var exclmación = str + '!'
  return exclmación;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  var completo = nombre + ' ' + apellido;
  return completo;

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

  var saludo = "Hola " + nombre + "!";
  return saludo;

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:

  var area = alto * ancho;
  return area;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
