var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludar(estudiante) {
    console.log(`Hola ${estudiante}`);
}

//Ejemplo for
for(var i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}

//Ejemplo for...of
for(var estudiante of estudiantes) {
	saludar(estudiante);
}

//Ejemplo while
while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}