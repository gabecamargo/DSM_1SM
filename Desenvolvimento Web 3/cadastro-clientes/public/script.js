const API_URL = "http://localhost:3000/clientes";
const form = document.getElementById("form-clientes");
const lista = document.getElementById("lista-clientes");

async function carregarClientes(){
    const resp = await fetch(API_URL);
    const clientes = await resp.json();

    lista.innerHTML = "";
    clientes.forEach(cliente => {
        const li = document.createElement("li");
        li.textContent = `${cliente.nome} - ${cliente.email} - ${cliente.telefone}`;
        lista.appendChild(li);
    })
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const novoCliente = {
        nome: document.getElementById("nome").value,
        nome: document.getElementById("email").value,
        nome: document.getElementById("telefone").value,
    };

    form.reset();
    carregarClientes();
});

carregarClientes();