
$(document).ready(function(){

 $.get( "/centro", (data)=> {
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

}
});//click

});//ready
