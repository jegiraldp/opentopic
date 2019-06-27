const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reg = require('./backend/registrarCursoFinal.js');
const listar = require('./backend/hola.js');
//settings
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',(req,res)=> {
  const rta=0;
  res.render('index.ejs',{rta:rta});
});

app.get('/curso',(req,res)=> {
  res.render('curso.ejs');
});

app.get('/listarcursos',(req,res)=> {
  //res.render('curso.ejs');
});

app.get('/registrarcurso',(req,res)=> {
  const rta=0;
  res.render('registrarcurso.ejs',{rta:rta});
});

app.post('/registrarcurso',(req,res)=> {

  let nc = req.body.txtNombreCurso;
  let ncc = req.body.txtNombreCreador;
  let cc = req.body.txtCorreoCreador;
  let d = req.body.txtDescripcion;
  let letra = nc.substring(0,1);
  var dat = new Date();
  let fecha = dat.getDate()+"-"+dat.getMonth()+1+"-"+dat.getFullYear();

  const promesaReg=reg.registro(nc,ncc,cc,d,letra,fecha);
  promesaReg.then(function(rta){
  rta="Curso: " + nc + " - Registrado Correctamente ";
  res.render('registrarcurso_salida.ejs',{rta:rta});
}).catch(function(rta){
  rta="-- ATENCIÓN --: "+nc + " - YA ESTÁ REGISTRADO .. ";
  res.render('registrarcurso_salida.ejs',{rta:rta});
});
});

////////////////

var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("server ok -- :) -- ");
});
