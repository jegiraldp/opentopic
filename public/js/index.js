
$(document).ready(function(){
$("img.opciones").click(function(){
  $("div#centro").html("");
 var t=$(this).attr('name');
 $("div#centro").load(t);
  $("div#pie").html("");
 });//click
 });//ready
