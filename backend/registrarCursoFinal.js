const mys = require('mysql');

module.exports.registro=function(nc,ncc,cc,d,letra,fecha){
  return new Promise(function (resolve,reject){
var dataCon={
host:'localhost',
user:'jorge',
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
var post  = {
  nombre: nc,
  creador: ncc,
  correo:cc,
  descripcion:d,
  letra:letra,
  fecha:fecha
  };
con.query('insert into opentopic_curso set ?',post,function (error, results,fields) {

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
