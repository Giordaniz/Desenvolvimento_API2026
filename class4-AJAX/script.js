function ler() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 3) {
            alert("servidor processando a requisição...");
        }

        if (this.readyState == 4 && this.status == 200) {
            var divConteudo = document.getElementById("conteudo");
            divConteudo.innerHTML = this.responseText;
        }
    }

    req.open("GET", "info.txt", true);
    req.send()
}

function gerar() {
    var valor = document.getElementById("numero").value;
    var divNumeros = document.getElementById("divNumeros");
    divNumeros.innerHTML = "Carregando..."
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            divNumeros.innerHTML = this.responseText;
        }    
    }
    req.open("GET", "server.php?numero=" + valor , true);
    req.send();
}