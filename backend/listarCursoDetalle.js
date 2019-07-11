const mys = require('mysql');

module.exports.verDetalle=function(nombreC){
return new Promise(function (resolve,reject){
var dataCon={
host:'localhost',
user:'jorge',
password:'jorge123',
database:'journal'
};
var elquery='SELECT * from opentopic_curso where nombre =\''+nombreC+'\'';
console.log(elquery);
var con = mys.createConnection(dataCon);
con.connect(function(err) {
  if (err) throw err;
  console.log('¡¡ Conectado !! -- Listar Curso Detalle');
}); //connect
/////
con.query(elquery, function (error, results,fields) {
  if (error) throw error;
    //console.table(results);
    con.end();
    console.log('¡¡ No Conectado !! -- Listar Curso Detalle');
    return resolve(results);

  }); //query

});//promesa
}//ver
