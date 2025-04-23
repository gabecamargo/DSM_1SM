import React, { useEffect, useState } from "react";
import api from "./api";

interface Regiao {
  id: number;
  nome: string;
  sigla: string;
}

const App: React.FC = () => {
  const [regioes, setRegioes] = useState<Regiao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRegioes = async () => {
      try {
        const response = await api.get<Regiao[]>("/");
        setRegioes(response.data);
      } catch (error) {
        console.error("Erro ao buscar regiões:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegioes();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Regiões do Brasil</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {regioes.map((regiao) => (
            <li key={regiao.id}>
              {regiao.nome} ({regiao.sigla})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
