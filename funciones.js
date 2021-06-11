//declarativas
function miFuncion() {
    return 3;
}

miFuncion();

//De expresion
var mifuncion2 = function(a, b) {
    return a + b;
}

miFuncion2();

//Ejemplo string template
function saludarEstudiantes(estudiante) {
	console.log(`hola ${estudiante}`);
	}

saludarEstudiantes("Diego");

//Ejemplo return
function sumar(a, b) {
    resultado = a + b;
    return resultado;
}

prueba = sumar(3,6);