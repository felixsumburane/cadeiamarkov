const fs = require('fs');

function tokenizarArquivo(caminhoArquivo) {
    try {
        const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
        const tokens = conteudo.split(/\s+/); // Regex para dividir por espaços em branco

        return tokens;
    } catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        return [];
    }
}

// Exemplo de uso
const caminhoArquivo = 'teste.txt';
const tokens = tokenizarArquivo(caminhoArquivo);

console.log(tokens);
