var express = require('express');

var app = express();

app.get('/', inicio);
app.get('/cursos', cursos);

function inicio(peticion, respuesta)
{
  respuesta.send('Este es el <br /> HOMBRdeesdsdedesesE')
}

function cursos(peticion, respuesta)
{
  respuesta.send('Este es el <br /> MARDITO')
}

app.listen(8080);
