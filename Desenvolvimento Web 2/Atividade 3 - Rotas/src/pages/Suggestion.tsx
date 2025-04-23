import { useEffect, useState } from 'react';
import { useSuggestion } from '../context/SuggestionContext';
import { generateMegaSenaNumbers } from '../utils/generateNumbers';

const Suggestion = () => {
  const { addSuggestion } = useSuggestion();
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const nums = generateMegaSenaNumbers();
    setNumbers(nums);
    addSuggestion(nums);
  }, []);

  const newSuggestion = () => {
    const nums = generateMegaSenaNumbers();
    setNumbers(nums);
    addSuggestion(nums);
  };

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
      <h2>Palpite para a Mega-sena</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
        {numbers.map((num, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#2ecc71',
              color: '#fff',
              width: 50,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              fontSize: '18px'
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <button onClick={newSuggestion} style={{ backgroundColor: 'blue', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
        Nova sugestão
      </button>
    </div>
  );
};

export default Suggestion;
