const API = "http://localhost:3000/api";

// Pessoas
if (document.getElementById("formPessoa")) {
  const form = document.getElementById("formPessoa");
  const lista = document.getElementById("listaPessoas");

  const carregarPessoas = async () => {
    const res = await fetch(`${API}/pessoas`);
    const data = await res.json();
    lista.innerHTML = data.map(p =>
      `<tr>
        <td>${p.idpessoa}</td>
        <td contenteditable="true" onBlur="atualizarPessoa(${p.idpessoa}, this.innerText)">${p.nome}</td>
        <td><button onclick="excluirPessoa(${p.idpessoa})">Excluir</button></td>
      </tr>`
    ).join("");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const nome = document.getElementById("nomePessoa").value;
    await fetch(`${API}/pessoas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome })
    });
    form.reset();
    carregarPessoas();
  });

  window.excluirPessoa = async id => {
    await fetch(`${API}/pessoas/${id}`, { method: "DELETE" });
    carregarPessoas();
  };

  window.atualizarPessoa = async (id, nome) => {
    await fetch(`${API}/pessoas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome })
    });
  };

  carregarPessoas();
}

// Carros
if (document.getElementById("formCarro")) {
  const form = document.getElementById("formCarro");
  const lista = document.getElementById("listaCarros");

  const carregarCarros = async () => {
    const res = await fetch(`${API}/carros`);
    const data = await res.json();
    lista.innerHTML = data.map(c =>
      `<tr>
        <td>${c.idcarro}</td>
        <td contenteditable="true" onBlur="atualizarCarro(${c.idcarro}, this.innerText)">${c.modelo}</td>
        <td><button onclick="excluirCarro(${c.idcarro})">Excluir</button></td>
      </tr>`
    ).join("");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const modelo = document.getElementById("modeloCarro").value;
    await fetch(`${API}/carros`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modelo })
    });
    form.reset();
    carregarCarros();
  });

  window.excluirCarro = async id => {
    await fetch(`${API}/carros/${id}`, { method: "DELETE" });
    carregarCarros();
  };

  window.atualizarCarro = async (id, modelo) => {
    await fetch(`${API}/carros/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modelo })
    });
  };

  carregarCarros();
}

// Associações
if (document.getElementById("formAssociacao")) {
  const form = document.getElementById("formAssociacao");
  const lista = document.getElementById("listaAssociacoes");

  const carregarAssociacoes = async () => {
    const res = await fetch(`${API}/associacoes`);
    const data = await res.json();
    lista.innerHTML = data.map(a =>
      `<tr>
        <td>${a.pessoa?.nome || "?"} (ID ${a.idpessoa})</td>
        <td>${a.carro?.modelo || "?"} (ID ${a.idcarro})</td>
        <td><button onclick="excluirAssociacao(${a.idpessoa}, ${a.idcarro})">Excluir</button></td>
      </tr>`
    ).join("");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const idpessoa = document.getElementById("idPessoa").value;
    const idcarro = document.getElementById("idCarro").value;
    await fetch(`${API}/associacoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idpessoa: Number(idpessoa), idcarro: Number(idcarro) })
    });
    form.reset();
    carregarAssociacoes();
  });

  window.excluirAssociacao = async (idpessoa, idcarro) => {
    await fetch(`${API}/associacoes`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idpessoa, idcarro })
    });
    carregarAssociacoes();
  };

  carregarAssociacoes();
}