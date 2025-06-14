const letra: string = 'e'.toLowerCase();

if (!/^[a-zA-Z]$/.test(letra)) {
    console.log("❌ O valor informado não é uma letra válida do alfabeto.");
} else if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
    console.log(`✅ A letra '${letra}' é uma vogal.`);
} else {
    console.log(`✅ A letra '${letra}' é uma consoante.`);
}
