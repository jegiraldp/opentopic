function validar() {
  var cla=document.f1.txtCla.value;
  if(cla=="") $("#loginrespuesta").html("Faltan Datos");
  else document.f1.submit();
}
