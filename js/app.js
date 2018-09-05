$( document ).ready(function() {
console.log('ready');
var meses = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
var dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
var fecha = new Date();
$("#fechadatos").html(dias[fecha.getDay()] + ", " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());



$("#Texto").click(function() {
 $("#Texto").css("color", "white");
});



    });
