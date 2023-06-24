function valorInput() {

    var nome = document.querySelector("input").value;
    var tituloCartela = document.querySelector("#Tabelas > div > h3").innerHTML = nome
    setTimeout(valorInput, 10);
}
valorInput();


tabela = document.querySelector("#Tabelas > table")
