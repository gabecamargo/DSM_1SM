import { useSuggestion } from '../context/SuggestionContext';

const History = () => {
  const { suggestions } = useSuggestion();

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '30px' }}>
      <h2>Palpites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
        {suggestions.map((sug, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '8px' }}>
            {sug.map((num, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#27ae60',
                  color: '#fff',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  fontSize: '16px'
                }}
              >
                {num}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
