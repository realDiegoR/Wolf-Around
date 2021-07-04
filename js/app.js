var vp = document.getElementById("canbas");
var papel = vp.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
  imagen: new Image()
}
var vaca = {
  url: "vaca.png",
  cargaOK: false,
  imagen: new Image()
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  imagen: new Image()
}
var pollo = {
  url: "pollo.png",
  cargaOK: false,
  imagen: new Image()
}
var lobo = {
  url: "lobo.png",
  cargaOK: false,
  imagen: new Image(),
}

fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);
document.addEventListener("keydown", moverLobo);

//IMPORTANTE PARA ASIGNAR POSICION CONSTANTE EN LOS ANIMALES
var vacaYa = false;
var cerdoYa = false;
var polloYa = false;
// -----

function cargarFondo(){
  fondo.cargaOK = true;
  dibujoCrack()
}
function cargarVaca(){
  vaca.cargaOK = true;
  dibujoCrack();}
function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujoCrack()}
function cargarPollo(){
  pollo.cargaOK = true;
  dibujoCrack()
}
function cargarLobo(){
  lobo.cargaOK = true;
  dibujoCrack();
}

//IMPORTANTE PARA ASIGNAR POSICION CONSTANTE EN LOS ANIMALES
var listaVacaX = []; var listaVacaY = [];
var listaCerdoX = []; var listaCerdoY = [];
var listaPolloX = []; var listaPolloY = [];
// -------

var cantidad = azar(1, 5);
var xLobo = 0;
var yLobo = 430;



function azar(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1) + min);
  return resultado;
}
console.log('Cantidad de animales: ' + cantidad)
