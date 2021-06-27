var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

//Metodo .filter()
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

//Metodo .map()
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});

//Metodo .find()
var encuentraArticulo = articulo.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

//Metodo .forEach()
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//Metodo .some()
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});