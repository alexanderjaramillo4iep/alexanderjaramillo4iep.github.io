
function abrirMenu(){
    $(".navegacion").show()
}

function cerrarMenu(){
    var anchoPantalla =  $(window).width()
    if(anchoPantalla <= 400){
        $(".navegacion").hide()
    }
}

