$(document).ready(function(){

 $("#boton").click(function() {
   var nc=$("input#txtNombreCurso").val();
   var ncc=$("input#txtNombreCreador").val();
   var cc=$("input#txtCorreoCreador").val();
   var de=$("input#txtDescripcion").val();
   let data  = {
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
    document.getElementById("f1").submit();
   
   }//else

 });//click

});//ready
