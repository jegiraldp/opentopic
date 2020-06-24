$(document).ready(function(){

$("img#setting").click(function(){
   $.get( "/login", function( data ) {
    $("div#centrocurso").html(data);
 })
});//click




});//ready
