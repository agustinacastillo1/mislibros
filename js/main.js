$("#nuevo").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="ingresar"]').css("display", "block");
});

$(".volver, .cerrar").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="inicio"]').css("display", "block");
});

$("#info").on("click", function () {
    $("[data-vista]").css("display", "none");
    $('[data-vista="datos"]').css("display", "block");
});



$('[data-vista="ingresar"] form').on("submit", function () {
    let titulo = $("#titulo").val();
    let autor = $("#autor").val();
    let editorial = $("#editorial").val();
    let sinopsis = $("#sinopsis").val();
    let puntuacion = $("#puntuacion").val();

    let nuevo_libro = $("<div></div>");
    nuevo_libro.addClass("card")
    .html(`
        <div class="card-body">
            <h2>${titulo}</h2>
            <p class="card-text">${autor}</p>
            <p class="card-text">${editorial}</p>
            <p class="card-text">${sinopsis}</p>
            <p class="card-text">
                Puntuación: 
                <span>${puntuacion}</span>
            </p>

            <div class="boton_eliminar">
                <a href="#" class="eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></a>
            </div>
        </div>`);
    $("#libros").prepend(nuevo_libro);
  
    $('[data-vista="ingresar"] form')[0].reset();

    $("[data-vista]").css("display", "none");
    $('[data-vista="inicio"]').css("display", "block");

    guardarLibro();
    return false;
});


$('[data-vista="inicio"]').on("click", ".card .card-body div .eliminar", function() {
    let rta = confirm("Estás seguro que querés eliminar este libro?");

    if(rta) {
        $(this).parent().parent().parent().remove();
        guardarLibro();
    }
});


$("#eliminarTodo").on("click", function () {
    let rta = confirm("Estás seguro que querés eliminar todos los libros?");

    if(rta) {
        $("#libros").children().remove();
        localStorage.clear();
    }
});

function guardarLibro() {
    let actuales = $("#libros").html();
    localStorage.setItem("libros", actuales);
}


$(function () {
    let guardados = localStorage.getItem("libros");
    if(guardados != null){
        $("#libros").html(guardados);
    }
});