$(document).ready(function(){
    //alert('documento listo');
    $('#example').DataTable( {
        "language": {
            "lengthMenu": "Mostrar _MENU_ entradas",
            "zeroRecords": "No se encontraron registros",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "sSearch":"Buscar",
            "oPaginate":{
              "sFirst": "Primero",
              "sLast": "Último",
              "sNext": "Siguiente",
              "sPrevious": "Anterior"
          }
        }
    } );
})

function validarFormulario() {
    var usuario = document.getElementById("user").value;
    var correo = document.getElementById("email").value;
    var mensaje2 = document.getElementById("mensaje").value;
    var error = "";

    
    if (usuario == "") {

      error += "El campo de usuario está vacío.\n";
      user.focus();
      user.style.background = "yellow";
    }else{
      user.style.background = "white";
    }
    if (correo == "") {
      error += "El campo de correo está vacío.\n";
      email.focus();
      email.style.background = "yellow";
    }else{
      email.style.background = "white";
    }
    if (mensaje2 == "") {
      error += "El campo de mensaje está vacío.\n";
      mensaje.focus();
      mensaje.style.background = "yellow";
    }else{
      mensaje.style.background = "white";
    }
    
    if (error != "") {
      alert("Por favor completa los siguientes campos:\n" + error);
      return false;
    }
    else {
      alert("Gracias por enviar tu mensaje");
      return true;
      
    }

  }