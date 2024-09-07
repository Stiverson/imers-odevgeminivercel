// console.log(dados);
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    

    if (!campoPesquisa) {
        section.innerHTML = "<p>Campo de busca vazio</p>";
        return
     }

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let personagen of personagens) {

    titulo = personagen.titulo.toLowerCase()
    descricao = personagen.descricao.toLowerCase()
    tags = personagen.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${personagen.titulo}</a>
                </h2>
                <p class="descricao-meta">${personagen.descricao}</p>
                <a href=${personagen.link} target="_blank">Mais informações</a>
            </div>
            `; 
    }
    
}

if (!resultados) {
    resultados = "<p>Personagem não encontrado em nossa base de dados.</p>"
}

section.innerHTML = resultados
}