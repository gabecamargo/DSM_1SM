import { useNavigate } from 'react-router-dom';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  flexDirection: 'column',
  color: '#fff',
};

const boxStyle: React.CSSProperties = {
  border: '1px solid #666',
  padding: '40px',
  borderRadius: '10px',
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: 'blue',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  marginTop: '20px',
  cursor: 'pointer',
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Bem-vindo!</h2>
        <button style={buttonStyle} onClick={() => navigate('/palpite')}>Clique para começar</button>
      </div>
    </div>
  );
};

export default Home;
