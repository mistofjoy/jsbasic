function articulo(status) {
    switch (status) {
        case "inactive":
            console.log("El articulo no esta disponible");
            break;
        case "active":
            console.log("El articulo esta disponible");
            break;
        default:
            console.log("El articulo no existe en nuestra base de datos");
            break;
    }
}

//Reto 
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
    switch (player) {
        case "tijeras": {
            if (opponent == "piedra") {
                console.log("Has perdido");
            }
            else {
                console.log("Has ganado");
            }
            break;
        }
        case "papel": {
            if (opponent == "tijeras") {
                console.log("Has perdido");
            }
            else {
                console.log("Has ganado");
            }
            break;
        }
        case "piedra": {
            if (opponent == "papel") {
                console.log("Has perdido");
            }
            else {
                console.log("Has ganado");
            }
            break;
        }
        default: {
            console.log("Pero tu no elegiste una opción válida");
            break;
        }
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