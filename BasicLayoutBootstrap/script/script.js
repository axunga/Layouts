window.onload = function(){

    

    $('#btnSend').click(function(){
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let cadena = {"Alumno1" : {"Nombre" : $('#nombre').val(), "Apellido" : $('#apellido').val()}};
        alert(cadena);
    });

    let cadena = {"Alumno1" : {"Nombre" : nombre, "Apellido" : apellido}};
    let alumnos = JSON.parse(cadena);
    console.log(alumnos);
}
