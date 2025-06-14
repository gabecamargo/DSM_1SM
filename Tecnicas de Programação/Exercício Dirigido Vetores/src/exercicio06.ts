const nomes: string[] = ["Ana", "Carlos", "Beatriz", "João", "Mariana"];
const notas1: number[] = [7.5, 8.0, 6.0, 9.0, 5.5];
const notas2: number[] = [8.5, 7.0, 7.0, 8.0, 6.5];

const medias: number[] = [];

for (let i = 0; i < nomes.length; i++) {
    const media = (notas1[i] + notas2[i]) / 2;
    medias.push(media);
}

for (let i = 0; i < nomes.length; i++) {
    console.log(`Aluno: ${nomes[i]} - Notas: ${notas1[i]}, ${notas2[i]} - Média: ${medias[i].toFixed(2)}`);
}
