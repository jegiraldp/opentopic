const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reg = require('./backend/registrarCursoFinal.js');
const listar = require('./backend/hola.js');
//settings
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');
//app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());


app.get('/',(req,res)=> {
  const rta=0;
  res.render('index.ejs',{rta:rta});
  //res.write('hola parcero');
  //res.end();
});

app.get('/curso',(req,res)=> {
  res.render('curso.ejs');
});

app.get('/centro',(req,res)=> {
  //res.write('hola parcero');
  //res.end();
  const rta=09;
  res.render('listadoinicio.ejs',{rta:rta});
});

app.get('/registrarcurso',(req,res)=> {
  const rta=0;
  res.render('registrarcurso.ejs',{rta:rta});
});

app.post('/registrarcurso',(req,res)=> {

  const {nombre} = req.body;
  const {creador} = req.body;
  const {correo} = req.body;
  const {descripcion} = req.body

  let letra = nombre.substring(0,1);
  var dat = new Date();
  let fecha = dat.getDate()+"-"+dat.getMonth()+1+"-"+dat.getFullYear();

  const promesaReg=reg.registro(nombre,creador,correo,descripcion,letra,fecha);
  promesaReg.then(function(rta){
  rta="Curso: " + nombre + " - Registrado Correctamente ";
  res.render('registrarcurso.ejs',{rta:rta});

}).catch(function(rta){
  rta="-- ATENCIÓN --: "+nombre + " - YA ESTÁ REGISTRADO .. ";
  res.render('registrarcurso.ejs',{rta:rta});
});
});

////////////////

var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("server ok -- :) -- ");
});
