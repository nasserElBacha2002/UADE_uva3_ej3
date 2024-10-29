$(document).ready(function() {
    $('#ocultarBtn').click(function() {
        $('#imagen').hide();
        $('#titulo').text('¡No tenemos ninguna imagen!');
    });

    $('#mostrarBtn').click(function() {
        $('#imagen').show();
        $('#titulo').text('¡Mirá la siguiente imagen!');
    });
});
