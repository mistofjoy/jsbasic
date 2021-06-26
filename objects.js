//Declarando objetos
var objeto = {};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//Funcion constructor
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var tuAuto = new auto("Tesla", "Model 3", 2020);