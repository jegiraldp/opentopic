$(document).ready(function(){

  /*$("form#f1").on('submit',function (e) {
    e.preventDefault();
  });*/

 $("#boton").click(function() {
   var nc=$("input#txtNombreCurso").val().toLowerCase();
   var ncc=$("input#txtNombreCreador").val();
   var cc=$("input#txtCorreoCreador").val();
   var de=$("textarea#txtDescripcion").val();

   const datos  = {
     nombre: nc,
     creador: ncc,
     correo:cc,
     descripcion:de
   };

   if(nc=="" || ncc=="" || cc=="" || de==""){
   $("#divrespuesta").html("");
   $("#diverror").show("slow");
   $("#diverror").html("¡¡ -- Datos Incorrectos -- !!");
   }//if
   else{
     $("#diverror").html("");

 //document.getElementById("f1").submit();
    $.post( "/registrarcurso", datos)
    .done(function( data ) {
      $("#divrespuesta").html(data);
    });

   }//else


   $("input#txtNombreCurso").val("");
   $("input#txtNombreCreador").val("");
   $("input#txtCorreoCreador").val("");
   $("textarea#txtDescripcion").val("");
 });//click

});//ready
