$(document).ready(function(){

 $("#boton").click(function() {
   var nc=$("input#txtNombreCurso").val();
   var ncc=$("input#txtNombreCreador").val();
   var cc=$("input#txtCorreoCreador").val();
   var de=$("input#txtDescripcion").val();
   var data  = {
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
    // $("#divrespuesta").html("A insertar");
    document.getElementById("f1").submit();
    /*  $.post( "registrarcurso", function( data ) {
        alert( "Data Loaded: " + data );
      });//post*/

   }//else
 });//click
});//ready
