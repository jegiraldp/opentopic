const express = require('express');

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const app = express();
const bodyParser = require('body-parser');
const reg = require('./backend/registrarCursoFinal.js');
const listar = require('./backend/hola.js');
const lis = require('./backend/listarInicio.js');
const lisDetalle = require('./backend/listarCursoDetalle.js');
const lisDetallesOT = require('./backend/listarDetallesOT.js');
//settings
app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');
//app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());


app.get('/',(req,res)=> {
  const rta=99;
  res.render('index.ejs',{rta:rta});
  //res.write('hola parcero');
  //res.end();
});

app.get('/google',(req,res)=> {
  res.send('estamos melos 1');
});

app.post('/curso',(req,res)=> {
  const {nombre} = req.body;
    const promesaD=lisDetalle.verDetalle(nombre);
  promesaD.then(function(rta){
    rta[0].nombre=rta[0].nombre.substring(1);
    rta[0].nombre=rta[0].letra.toUpperCase()+rta[0].nombre;
    //console.log(rta[0].descripcion);
    res.render('curso.ejs',{nombre:nombre,rta:rta});
});//then
});

app.get('/centro',(req,res)=> {
  //res.write('hola parcero');
  //res.end();
  var total=0;

  const promesaDot=lisDetallesOT.totalAutores();
  promesaDot.then(function(rtaDOT){

    total=rtaDOT;
    //console.log(total);
  });
  const promesa=lis.verinicio();
    promesa.then(function(rta){

      for (var i = 0; i < rta.length; i++) {
        rta[i].nombre=rta[i].nombre.substring(1);
        rta[i].nombre=rta[i].letra.toUpperCase()+rta[i].nombre;
      }

      res.render('listadoinicio.ejs',{rta:rta, total:total});
    });
});

app.get('/registrarcurso',(req,res)=> {
  const rta=0;
  res.render('registrarcurso.ejs',{rta:rta});
});

app.get('/login',(req,res)=> {
  const clave=0;
  res.render('login.ejs',{clave:clave});
});


app.post('/login', passport.authenticate('google'),(req,res)=> {
  const {clave} = req.body;
  /*var rta="jorge";
  if(clave=="99"){
  res.render('adminCursoInicio.ejs',{rta:rta});
  }else{
    var rta="Usuario no registrado - comuniquese con su administrador !!"
    res.render('loginFinal.ejs',{rta:rta});
  }*/

  res.redirect('/registrarcurso');
});

app.post('/registrarcurso',(req,res)=> {

  const {nombre} = req.body;
  const {creador} = req.body;
  const {correo} = req.body;
  const {descripcion} = req.body

  let letra = nombre.substring(0,1);
  var dat = new Date();
  var mes =parseInt(dat.getMonth());
  mes+=1;
  let fecha = dat.getDate()+"-"+mes+"-"+dat.getFullYear();

  const promesaReg=reg.registro(nombre,creador,correo,descripcion,letra,fecha);
  promesaReg.then(function(rta){
  rta="Curso: " + nombre + " - Registrado Correctamente ";
  //res.render('registrarcurso.ejs',{rta:rta});
  res.end(rta);

}).catch(function(rta){
  rta="-- ATENCIÓN --: "+nombre + " - YA ESTÁ REGISTRADO .. ";
  //res.render('registrarcurso.ejs',{rta:rta});
  res.end(rta);
});
});

////////////////

var port =process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log("server ok -- :) -- ");
});
