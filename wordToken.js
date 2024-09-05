const fs = require('fs');
const mammoth = require('mammoth');

function tokenizarArquivo(caminhoArquivo) {
    try {
        const buffer = fs.readFileSync(caminhoArquivo);
        const options = { convertToHtml: true };

        return mammoth.extractRawText({ buffer }, options)
            .then((result) => {
                const texto = result.value;
                const paragrafos = texto.split(/\r?\n/); // Divide o texto em parágrafos com base nas quebras de linha
                let tokens = [];

                paragrafos.forEach((paragrafo) => {
                    const tokensParagrafo = paragrafo.split(/\s+/); // Divide cada parágrafo em tokens com base nos espaços em branco
                    tokens = tokens.concat(tokensParagrafo);
                });

                return tokens;
            });
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        return [];
    }
}

// Exemplo de uso
const caminhoArquivo = 'teste.docx';
tokenizarArquivo(caminhoArquivo)
    .then((tokens) => {
        console.log(tokens);
    })
    .catch((error) => {
        console.error('Erro na tokenização:', error);
    });
