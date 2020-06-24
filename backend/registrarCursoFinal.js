const mys = require('mysql');

module.exports.registro=function(nombre,creador,correo,descripcion,letra,fecha){
  return new Promise(function (resolve,reject){
var dataCon={
host:'localhost',
user:'jorge_ot',
password:'jorge123',
database:'journal'
};
var con = mys.createConnection(dataCon);
con.connect(function(err) {
  if (err) {
    console.log('\n¡¡ Error de conexión !! ');
    return;
  }//if
  console.log('¡¡ Conectado !!  -- Registrar');
}); //connect
var datos  = {
  nombre,
  creador,
  correo,
  descripcion,
  letra,
  fecha
  };
con.query('insert into opentopic_curso set ?',datos,function (error, results,fields) {

  if (error) {
    console.log('\n¡¡ Error de Query !! ');
    return reject("Error de SQL");
  }
  console.log('¡¡ Registro ok !! ');
  con.end();
  console.log('¡¡ No Conectado !! -- Registrar');
  return resolve("ok");

}); //query
});//promesa
}//funcion
