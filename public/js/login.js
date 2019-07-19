$(document).ready(function(){
  /*var cla=document.f1.txtCla.value;
  if(cla=="") $("#loginrespuesta").html("Faltan Datos");
  else document.f1.submit();*/

  $("input#boton").click(function() {
    var clave=$("input#txtCla").val().toLowerCase();

    if(clave==""){
      $("div#loginrespuesta").show("slow");
      $("div#loginrespuesta").html("¡¡ Faltan Datos !!");
    }else{
      $("div#loginrespuesta").html("");

      const datos  = {clave:clave,ape:"llido"};

       $.post( "/login",datos,'json')
       .done(function(data) {
         $("div#loginrespuesta").html(data);
         $("div#centrocurso").html(data);
       });

        $("input#txtCla").val("");

    }//else


  });//click


});//ready
