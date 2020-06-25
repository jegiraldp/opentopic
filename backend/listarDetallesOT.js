const mys = require('mysql');

module.exports.totalAutores=function(){
return new Promise(function (resolve,reject){
var dataCon={
host:'localhost',
user:'jorge_ot',
password:'jorge123',
database:'journal'
};
var elquery='SELECT count(nombre) total from opentopic_curso';
//console.log(elquery);
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
