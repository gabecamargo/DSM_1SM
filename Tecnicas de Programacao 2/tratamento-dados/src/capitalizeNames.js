const fs = require('fs');
const path = require('path');

function capitalizeName(name) {
  const prepositions = ['de', 'da', 'das', 'do', 'dos', 'e'];
  const words = name.toLowerCase().split(' ');

  const capitalizedWords = words.map(word => {
    if (!prepositions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return word;
  });

  return capitalizedWords.join(' ');
}

const inputFilePath = path.join(__dirname, '..', 'nomes.csv');
const outputFilePath = path.join(__dirname, '..', 'nomes_capitalizados.csv');

fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo de entrada:", err);
    return;
  }

  const names = data.split('\n');
  const capitalizedNames = names.map(name => {
    if (name.trim() !== '') {
      return capitalizeName(name.trim());
    }
    return '';
  }).filter(name => name !== ''); // Remove linhas em branco

  const outputData = capitalizedNames.join('\n');

  fs.writeFile(outputFilePath, outputData, 'utf8', (err) => {
    if (err) {
      console.error("Erro ao escrever no arquivo de saída:", err);
      return;
    }
    console.log('Arquivo "nomes_capitalizados.csv" criado com sucesso!');
  });
});