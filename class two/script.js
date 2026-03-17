function validar(){
    valor = document.getElementById("txtValor").value
    var divResult = document.getElementById("divResult")
    if (isNaN(valor)) {
        divResult.innerHTML = "só numbers tuffos please."       
    }else if (valor <= 66) {
        divResult.innerHTML = "nada tuffo..."
    }else if (valor == 67) {
         divResult.innerHTML = "TUFFO AS FUCK"
}else if (valor == 68) {
         divResult.innerHTML = "saBOR tuffo."
}
else if (valor == 69) {
         divResult.innerHTML = "OOH DELICIUS"
}else if (valor <= 70) {
         divResult.innerHTML = "nada tuffo.."
}
}
function limpar() {
    document.getElementById("divResult").innerHTML = ""
}


$("#divJquest").css("background" , "rgba(211, 214, 12, 1)")
$("#divJquest").css("color" , "#000000ff")
$("#divJquest").html("C.R.E.A.M Cash Rule Everything Around Me <hr> Wu-Tang Clan")


$("#butao").on("click" , function (){
    $("#divJquest").toggle()
})





























