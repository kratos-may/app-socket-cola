//comando para establecer comunicacion del servidor
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has("escritorio")){
    window.location= "index.html";
    alert("El escritorio es necesario");
}

var escritorio = searchParams.get("escritorio");
var label = $("small");
$("h1").text(`Escritorio ${escritorio}`)
$("button").on("click", function(){
    socket.emit("atenderTicket",{escritorio: escritorio},function(resp){
        if(resp === "No hay mas  tickets"){
            label.text(resp);
            alert(resp);
            return;
        }
        audio = new Audio('audio/new-ticket.mp3');
        audio.play();
        label.text("Ticket" + resp.numero);
    })
})


