
$(document).ready(function(){

 $.get( "/centro", function( data ) {
   $("div#centro").html(data);
})
 //post

$("img.opciones").click(function(){
  $("div#centro").html("");
 var t=$(this).attr('name');
 if(t=="home"){
   location.reload();
 }else{
 $("div#centro").load(t);
  $("div#pie").html("");
}
});//click


$("a#nombre").click(function(){
  //var t=$(this).attr('name');
  alert("hola");
});//click

});//ready
