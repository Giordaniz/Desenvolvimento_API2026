function LerJSON(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objJSON = JSON.parse(this.responseText);
            var txt = "Nome: " + objJSON.nome + "<br>";
            txt += "Idade: " + objJSON.idade + "<br>";
            txt += "Formações: ";

            objJSON.formacoes.forEach(formacao => {
                txt += formacao + " - ";
            });

            if (objJSON.conjuge) {
                txt += "<br>Cônjuge: " + objJSON.conjuge.nome;
            }

            if (objJSON.filhos) {
                txt += "<br>Filhos: ";
                objJSON.filhos.forEach(filho => {
                    txt += "<br> " + filho.nome + " idade: " + filho.idade;
                });
            }

            document.getElementById("divJSON").innerHTML = txt;
        }
    };

    req.open("GET", "dados.json", true);
    req.send();
}



function lerProdutos() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            var produtos = resposta.produtos;
           
var txt = "";

if (produtos.length == 0) {
    txt = "<tr><th>Nenhum produto cadastrado!</th></tr>";
} else {
    txt = "<tr>";
    txt += "<th>Código</th>";
    txt += "<th>Nome</th>";
    txt += "<th>Preço</th>";
    txt += "</tr>";

    produtos.forEach(prod => { 
        txt += "<tr>";
        txt += "<td>" + prod.id + "</td>"; 
        txt += "<td>" + prod.nome + "</td>";
        txt += "<td>" + prod.preco + "</td>";
        txt += "</tr>";
    });
}
    document.getElementById("tblProdutos").innerHTML = txt;
        }
    }


    req.open("GET" , "server.php?buscar" ,true);
    req.send()
}
