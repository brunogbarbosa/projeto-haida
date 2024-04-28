var topicos = [
    { nome: "Segurança da Informação", link: "seguranca.html" },
    { nome: "Análise BI", link: "analisebi.html" },
    { nome: "Análise de Dados", link: "ads.html" },
    { nome: "Gestão de projetos de TI", link: "gestao.html" },
    { nome: "Análise de UX", link: "analiseux.html" },
    { nome: "Programação", link: "programacao.html" },
    { nome: "Qualidade de software", link: "qds.html" },
];

var indiceAtual = 0;

function mudarTopico() {
    indiceAtual++;
    if (indiceAtual >= topicos.length) {
        indiceAtual = 0; // Voltar ao primeiro tópico
    }
    document.getElementById("topicLink").href = topicos[indiceAtual].link;
    document.getElementById("topicLink").textContent = topicos[indiceAtual].nome;
}
