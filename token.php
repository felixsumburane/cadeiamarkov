<?php
function tokenizarArquivo($caminhoArquivo) {
  try {
    $conteudo = file_get_contents($caminhoArquivo);
    $tokens = preg_split('/\s+/', $conteudo); // Regex para dividir por espaços em branco

    return $tokens;
  } catch (Exception $error) {
    echo 'Erro ao ler o arquivo: ' . $error->getMessage();
    return [];
  }
}

// Exemplo de uso
$caminhoArquivo = 'teste.txt';
$tokens = tokenizarArquivo($caminhoArquivo);

print_r($tokens);
?>
