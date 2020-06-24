const mys = require('mysql');

module.exports.verinicio=function(){
return new Promise(function (resolve,reject){
var dataCon={
host:'localhost',
user:'jorge_ot',
password:'jorge123',
database:'journal'
};
var con = mys.createConnection(dataCon);
con.connect(function(err) {
  if (err) throw err;
  console.log('¡¡ Conectado !! -- Listar');
}); //connect
/////
con.query('SELECT * from opentopic_curso order by letra', function (error, results,fields) {
  if (error) {
    console.log('\n¡¡ Error de Query !! ');
    return reject("Error de SQL");
  }
    //console.table(results);
    con.end();
    console.log('¡¡ No Conectado !! -- Listar');
    //console.table(results);
    return resolve(results);

  }); //query

});//promesa
}//ver
