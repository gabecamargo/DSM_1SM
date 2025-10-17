document.getElementById("searchBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = "<p>⚠️ Por favor, insira o nome da cidade.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>🔍 Buscando informações...</p>";
  resultDiv.classList.remove("hidden");

  try {
    const response = await fetch(`/api/weather/${city}`);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = `<p>❌ ${data.error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <h2>${data.cidade}</h2>
      <img src="${data.icone}" alt="Condição do tempo">
      <p><strong>🌡️ Temperatura:</strong> ${data.temperatura}</p>
      <p><strong>🤔 Sensação térmica:</strong> ${data.sensacao}</p>
      <p><strong>💧 Umidade:</strong> ${data.umidade}</p>
      <p><strong>☁️ Condição:</strong> ${data.condicao}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = "<p>🚫 Erro ao buscar os dados do clima.</p>";
  }
});
