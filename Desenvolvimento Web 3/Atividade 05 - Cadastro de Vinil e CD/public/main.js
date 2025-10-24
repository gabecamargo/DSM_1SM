const API = '/api/discos';

const form = document.getElementById('form');
const tbody = document.getElementById('tbody');

async function listar() {
  const res = await fetch(API);
  const data = await res.json();
  tbody.innerHTML = data.map(d => `
    <tr>
      <td>${d.titulo}</td>
      <td>${d.artista}</td>
      <td>${d.ano}</td>
      <td>${d.genero}</td>
      <td>${d.formato}</td>
      <td>R$ ${Number(d.preco).toFixed(2)}</td>
      <td class="actions">
        <button onclick='editar(${JSON.stringify(d)})'>Editar</button>
        <button onclick='excluir("${d._id}")'>Excluir</button>
      </td>
    </tr>
  `).join('');
}

function editar(d) {
  document.getElementById('id').value = d._id;
  document.getElementById('titulo').value = d.titulo;
  document.getElementById('artista').value = d.artista;
  document.getElementById('ano').value = d.ano;
  document.getElementById('genero').value = d.genero;
  document.getElementById('formato').value = d.formato;
  document.getElementById('preco').value = d.preco;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function excluir(id) {
  if (!confirm('Tem certeza que deseja excluir?')) return;
  const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
  if (res.status === 204) listar();
  else alert('Erro ao excluir');
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('titulo').value.trim(),
    artista: document.getElementById('artista').value.trim(),
    ano: Number(document.getElementById('ano').value),
    genero: document.getElementById('genero').value.trim(),
    formato: document.getElementById('formato').value,
    preco: Number(document.getElementById('preco').value)
  };

  const id = document.getElementById('id').value;
  const method = id ? 'PUT' : 'POST';
  const url = id ? `${API}/${id}` : API;

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    form.reset();
    listar();
  } else {
    const err = await res.json().catch(() => ({}));
    alert(err.message || 'Erro ao salvar');
  }
});

listar();
