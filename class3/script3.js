var pessoa = {
    nome: "Robert" ,
    sobrenome: "Mark" ,
    idade: "23+1" ,
    altura: 1.83 ,
    jogos: ["League of Legends", "Resident Evil 4 Remake", "SIlent Hill F", "Assassin Creed Shadows"],
    conjugue: {
        nome: "Milleny" ,
        idade: 23 ,
    },
    getNomeCompleto : function() {
        return this.nome + " "+ this.sobrenome
    }
}

function carregar() {
    var texto = "Nome: " + pessoa.getNomeCompleto() + "<br>"
    texto += "Idade: " + pessoa.idade + "<br>"
    texto += "Conjugue: " + pessoa.conjugue.nome + "<br>"
    texto += "idade: " + pessoa.conjugue.idade + "<br>"
    pessoa.jogos.forEach( games => {
        texto += games + " - "    
    });
    document.getElementById("divConteudo").innerHTML = texto;
}
console.log("Arquivo JS carregado");