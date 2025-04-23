import { Link } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#222',
  color: '#fff'
};

const Header = () => (
  <header style={headerStyle}>
    <div>
      <h1 style={{ margin: 0 }}>Fatec <small style={{ fontSize: '14px' }}>Jacareí</small></h1>
      <p style={{ margin: 0, fontSize: '12px' }}>Prof. Francisco de Moura</p>
    </div>
    <nav>
      <Link to="/palpite" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Palpite</Link>
      <Link to="/historico" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Histórico</Link>
    </nav>
  </header>
);

export default Header;
