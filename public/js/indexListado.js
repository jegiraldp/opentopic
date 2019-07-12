
$(document).ready(function(){

  $("a#nombre").click(function(){
    var nombre=$(this).attr('name');

   $("div#encabezado").html(nombre);

   const datos  = {
      nombre: nombre,
      ape: "llido"

    }

    $.post( "/curso",datos,'json')
    .done(function(data) {
      $("div#centro").html(data);
    });

  });//click

});//ready
