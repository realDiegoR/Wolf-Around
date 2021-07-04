function dibujoCrack(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
    for(v=0; v<cantidad; v++){
      var xVaca = azar(1, 5) * 80;
      var yVaca = azar(1, 5) * 80;
      if (listaVacaX.length < cantidad && listaVacaY.length < cantidad) {
        listaVacaX[v] = xVaca;
        listaVacaY[v]= yVaca;
      }
      if(vacaYa == false) {
        papel.drawImage(vaca.imagen, xVaca, yVaca)
      }
      else{
        for (var i = 0; i < cantidad; i++) {
          papel.drawImage(vaca.imagen, listaVacaX[i], listaVacaY[i])
        }
      }
    }
    vacaYa = true;
  }
  if(cerdo.cargaOK){
    for(c=0; c<cantidad; c++){
      var xCerdo = azar(1, 5) * 80;
      var yCerdo = azar(1, 5) * 80;
      if (listaCerdoX.length < cantidad && listaCerdoY.length < cantidad) {
        listaCerdoX[c] = xCerdo;
        listaCerdoY[c]= yCerdo;
      }
      if(cerdoYa == false) {
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo)
      }
      else{
        for (var i = 0; i < cantidad; i++) {
          papel.drawImage(cerdo.imagen, listaCerdoX[i], listaCerdoY[i])
        }
      }
    }
    cerdoYa = true;
  }
  if(pollo.cargaOK){
    for(p=0; p<cantidad; p++){
      var xPollo = azar(1, 5) * 80;
      var yPollo = azar(1, 5) * 80;
      if(listaPolloX.length < cantidad && listaPolloY.length < cantidad){
        listaPolloX[p] = xPollo;
        listaPolloY[p] = yPollo;
      }
      if(polloYa == false){
        papel.drawImage(pollo.imagen, xPollo, yPollo);
      }
      else{
        for(var i = 0; i < cantidad; i++){
          papel.drawImage(pollo.imagen, listaPolloX[i], listaPolloY[i])
        }
      }
    }
    polloYa = true;
  }
  if(lobo.cargaOK)
  {
    dibujoLobo();
  }
}

function moverLobo(evento)
{
  var movimiento = 10;
  switch(evento.keyCode){
    case teclas.UP:
    yLobo = yLobo - movimiento;
    break;
    case teclas.DOWN:
    yLobo = yLobo + movimiento;
    break;
    case teclas.LEFT:
    xLobo = xLobo - movimiento;
    break;
    case teclas.RIGHT:
    xLobo = xLobo + movimiento;
    break;
  }
  dibujoCrack();
}

function dibujoLobo(){
  papel.drawImage(lobo.imagen, xLobo, yLobo);
}
