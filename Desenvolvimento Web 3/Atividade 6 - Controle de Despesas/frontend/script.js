const API_BASE = 'http://localhost:3000/api/expenses';

const listEl = document.getElementById('expense-list');
const totalEl = document.getElementById('total-amount');
const formEl = document.getElementById('expense-form');
const descEl = document.getElementById('description');
const amountEl = document.getElementById('amount');
const dateEl = document.getElementById('date');

function fmtBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function fmtDate(dateStr) {
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

async function fetchExpenses() {
  const res = await fetch(API_BASE);
  const data = await res.json();
  listEl.innerHTML = '';
  data.forEach(addExpenseRow);
}

async function fetchTotalExpenses() {
  const res = await fetch(API_BASE + '/total');
  const { total } = await res.json();
  totalEl.textContent = fmtBRL(total || 0);
}

function addExpenseRow(expense) {
  const li = document.createElement('li');
  li.className = 'item';
  li.dataset.id = expense._id;

  const desc = document.createElement('div');
  desc.textContent = expense.description;

  const amt = document.createElement('div');
  amt.innerHTML = `<span class="badge">${fmtBRL(expense.amount)}</span>`;

  const date = document.createElement('div');
  date.innerHTML = `<span class="badge">${fmtDate(expense.date)}</span>`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-edit';
  editBtn.textContent = 'Alterar';
  editBtn.onclick = () => editExpense(expense);

  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-delete';
  delBtn.textContent = 'Excluir';
  delBtn.onclick = () => deleteExpense(expense._id);

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  li.appendChild(desc);
  li.appendChild(amt);
  li.appendChild(date);
  li.appendChild(actions);
  listEl.appendChild(li);
}

async function createExpense(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const { error } = await res.json();
    alert(error || 'Erro ao cadastrar.');
    return;
  }
  await fetchExpenses();
  await fetchTotalExpenses();
}

async function updateExpense(id, payload) {
  const res = await fetch(API_BASE + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const { error } = await res.json();
    alert(error || 'Erro ao alterar.');
    return;
  }
  await fetchExpenses();
  await fetchTotalExpenses();
}

async function deleteExpense(id) {
  if (!confirm('Excluir esta despesa?')) return;
  const res = await fetch(API_BASE + '/' + id, { method: 'DELETE' });
  if (!res.ok && res.status !== 204) {
    try {
      const { error } = await res.json();
      alert(error || 'Erro ao excluir.');
    } catch { alert('Erro ao excluir.'); }
    return;
  }
  await fetchExpenses();
  await fetchTotalExpenses();
}

function editExpense(expense) {
  const newDesc = prompt('Descrição:', expense.description);
  if (newDesc === null) return;

  const newAmountStr = prompt('Valor (R$):', expense.amount.toString());
  if (newAmountStr === null) return;

  const newAmount = Number(newAmountStr);
  if (isNaN(newAmount) || newAmount < 0) {
    alert('Valor inválido.');
    return;
  }

  const newDateStr = prompt('Data (aaaa-mm-dd):', expense.date.slice(0,10));
  let payload = { description: newDesc.trim(), amount: newAmount };
  if (newDateStr && newDateStr.trim() !== '') {
    payload.date = newDateStr;
  }

  updateExpense(expense._id, payload);
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = descEl.value.trim();
  const amount = Number(amountEl.value);
  const date = dateEl.value; // yyyy-mm-dd

  if (!description) {
    alert('Descrição é obrigatória.');
    return;
  }
  if (isNaN(amount) || amount < 0) {
    alert('Valor inválido.');
    return;
  }

  const payload = { description, amount };
  if (date) payload.date = date;
  createExpense(payload);

  formEl.reset();
});

// Inicialização
fetchExpenses();
fetchTotalExpenses();
