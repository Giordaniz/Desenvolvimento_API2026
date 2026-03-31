function LerJSON(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objJSON = JSON.parse( this.responseText );
            var txt = "Nome: " + objJSON.nome + "<br>";
            txt += "Idade: " + objJSON.idade + "<br>";
            txt += "Formações: ";
            objJSON.formacoes.forEach( formacao => {
                txt += formacao + " - "
            });
            if (objJSON.preso) {
                txt += "<br>Cônjuge: " + objJSON.conjuge.nome;
            }
            txt += "<br>Filhos: ",
            objJSON.filhos.forEach(filho=>{
                txt += "<br> " + filho.nome + " idade: " + filho.idade;
            });
            document.getElementById("divJSON").innerHTML =txt;
        }
    }


    req.open("GET" , "dados.json" , true);
    req.send();

}



function lerProdutos() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var produtos = JSON.parse(this.responseText)
            var txt = " "
            if (produtos.length ==0) {
                txt = "<tr><th>Nenhum produto cadastrado!</th></tr>";
            }else{

                
                txt = "<tr>"
                txt +=      " <th> Código </th> "
                txt +=      " <th> nome </th> "
                txt +=      " <th> Preço </th> "
                txt +=      "</th> ";
                produtos.forEach( prod => { 
                    txt += "<tr>";
                    txt += "    <td>" + prod.id + "</td>"; 
                    txt += "    <td>" + prod.nome + "</td>";
                    txt += "    <td>" + prod.preco + "</td>";
                    txt += "</tr>";
                })
            }
        }
    }


    req.open("GET" , "server.php?buscar" ,true);
    req.send()
}