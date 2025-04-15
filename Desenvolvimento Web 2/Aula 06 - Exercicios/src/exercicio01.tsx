import { BrowserRouter, Link, Route, Routes } from 'react-router'
import './App.css'

function Legume() {
  return (
    <div style={{ backgroundColor: "PeachPuff" }}>
      <div>Beterraba</div>
      <div>Cenoura</div>
    </div>
  );
}

function Verdura() {
  return (
    <div style={{ backgroundColor: "palegreen" }}>
      <div>Alface</div>
      <div>Couve</div>
    </div>
  );
}

function Fruta() {
  return (
    <div style={{ backgroundColor: "LemonChiffon" }}>
      <div>Laranja</div>
      <div>Manga</div>
    </div>
  );
}

function Erro() {
  return <h3>Rota inexistente</h3>;
}


function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1em" }}>
        <Link to="/legume" style={{ marginRight: "1em" }}>Legume</Link>
        <Link to="/verdura" style={{ marginRight: "1em" }}>Verdura</Link>
        <Link to="/fruta">Fruta</Link>
      </nav>

      <Routes>
        <Route path="/legume" element={<Legume />} />
        <Route path="/verdura" element={<Verdura />} />
        <Route path="/fruta" element={<Fruta />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;