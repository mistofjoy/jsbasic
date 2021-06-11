//Condicionales if / if else
var edad;

function edadParaVotar(edad) {
    if (edad === 18) {
        console.log("Puedes votar. Será tu primera vez");
    }
    else if (edad > 18) {
        console.log("Puedes votar de nuevo");
    }
    else {
        console.log("este año aún no puedes votar");
    }
}

//Operador ternario
var numero = 1;

var mensaje = numero == 1 ? "soy un uno" : "No soy un uno";
console.log(mensaje);

//Reto: piedra, papel, tijeras
function pc() {
    var x = Math.ceil(Math.random() * 100);
    if (x % 5 == 0) {
        return "tijeras";
    }
    else if (x % 3 == 0) {
        return "papel";
    }
    else if (x % 2 == 0) {
        return "piedra";
    }
    else {
        return "tijeras";
    }
}


function validation(player, opponent) {
    if (player == "tijeras") {
        if (opponent == "piedra") {
            console.log("Has perdido");
        }
        else {
            console.log("Has ganado");
        }
    }
    else if (player == "papel") {
        if (opponent == "tijeras") {
            console.log("Has perdido");
        }
        else {
            console.log("Has ganado");
        }
    }
    else if (player == "piedra") {
        if (opponent == "papel") {
            console.log("Has perdido");
        }
        else {
            console.log("Has ganado");
        }
    }
    else {
        return console.log("Pero tu no elegiste una opción válida");
    }
}

function vs(player) {
    opponent = pc();
    console.log("Tu oponente usó " + opponent);
    if (player == opponent) {
        console.log("Han empatado");
    }
    else {validation(player,opponent)}
}