//comando para establecer comunicacion del servidor
var socket = io();
var label = $("#lblNuevoTicket")
socket.on("connect",function(){
    console.log("servidor conectado")
});

socket.on("disconnect",function(){
    console.log("servidor desconectado")
});

socket.on("estadoActual",function(resp){
    label.text(resp.actual);
})

$("button").on("click",function(){
    socket.emit("siquienteTicket",null,function(sigTick){
        label.text(sigTick);
    });
})

$("label").on("")