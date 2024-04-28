var topicos = [ "Análise BI", 
                "Análise de Dados", 
                "Gestão de projetos de TI",
                "Análise de UX",
                "Programação",
                "Qualidade de software"
            ]; 
var indiceAtual = 0; 
function mudarTopico() {
    indiceAtual++; // Avança para o próximo tópico
    if (indiceAtual >= topicos.length) {
        indiceAtual = 0; 
    }
    document.querySelector(".topics").innerText = topicos[indiceAtual];
}
