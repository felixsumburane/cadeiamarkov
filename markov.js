// Definindo as frases de exemplo
const frases = [
    "eu agora estou um pouco cansado, não vou poder sair",
    "Amanha não teremos como ir à sua festa",
    "temos um compromisso amanhã",
    "Vamos para a faculdade mais tarde",
    "Amanha comida",
    "Milton Miquitaio"
];

// Função para criar a cadeia de Markov
function criarCadeiaMarkov(frases) {
    const markov = {};

    // Iterar através das frases
    for (let i = 0; i < frases.length; i++) {
        const palavras = frases[i].split(" ");

        // Iterar através das palavras da frase
        for (let j = 0; j < palavras.length - 1; j++) {
            const palavraAtual = palavras[j];
            const palavraSeguinte = palavras[j + 1];

            // Se a palavra atual não estiver no objeto markov, adicioná-la
            if (!markov[palavraAtual]) {
                markov[palavraAtual] = [];
            }

            // Adicionar a palavra seguinte à lista de palavras seguintes da palavra atual
            markov[palavraAtual].push(palavraSeguinte);
        }
    }

    return markov;
}

// Função para gerar a próxima palavra
function gerarProximaPalavra(cadeiaMarkov, palavraAtual) {
    const palavrasSeguintes = cadeiaMarkov[palavraAtual];
    if (!palavrasSeguintes || palavrasSeguintes.length === 0) {
        return null; // Se não houver palavras seguintes, retornar null
    }
    const indiceAleatorio = Math.floor(Math.random() * palavrasSeguintes.length);
    return palavrasSeguintes[indiceAleatorio];
}

// Criar a cadeia de Markov com base nas frases fornecidas
const cadeiaMarkov = criarCadeiaMarkov(frases);

// Interface de comunicação
const promptInput = document.getElementById("prompt-input");
const outputDisplay = document.getElementById("output-display");
const button = document.getElementById("generate-button");

button.addEventListener("click", () => {
    const palavraAtual = promptInput.value;
    const proximaPalavra = gerarProximaPalavra(cadeiaMarkov, palavraAtual);

    if (proximaPalavra) {
        outputDisplay.textContent = proximaPalavra;
    } else {
        outputDisplay.textContent = "Não há uma próxima palavra para gerar.";
    }
});

document.getElementById("prompt-input").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const palavraAtual = promptInput.value;
        const proximaPalavra = gerarProximaPalavra(cadeiaMarkov, palavraAtual);

        if (proximaPalavra) {
            outputDisplay.textContent = proximaPalavra;
        } else {
            outputDisplay.textContent = "Não há uma próxima palavra para gerar.";
        }
    }
})
