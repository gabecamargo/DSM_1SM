import React, { useEffect, useState } from "react";
import api from "./api";

interface Regiao {
  id: number;
  nome: string;
  sigla: string;
}

interface Estado {
  id: number;
  nome: string;
  sigla: string;
}

const App: React.FC = () => {
  const [regioes, setRegioes] = useState<Regiao[]>([]);
  const [estados, setEstados] = useState<Estado[]>([]);
  const [regiaoSelecionada, setRegiaoSelecionada] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegioes = async () => {
      try {
        const response = await api.get<Regiao[]>("/");
        setRegioes(response.data);
      } catch (error) {
        console.error("Erro ao buscar regiões:", error);
      }
    };

    fetchRegioes();
  }, []);

  const handleClickRegiao = async (id: number, nome: string) => {
    try {
      const response = await api.get<Estado[]>(`/${id}/estados`);
      setEstados(response.data);
      setRegiaoSelecionada(nome);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Regiões do Brasil</h1>
      <ul>
        {regioes.map((regiao) => (
          <li
            key={regiao.id}
            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
            onClick={() => handleClickRegiao(regiao.id, regiao.nome)}
          >
            {regiao.nome} ({regiao.sigla})
          </li>
        ))}
      </ul>

      {regiaoSelecionada && (
        <>
          <h2>Estados da região {regiaoSelecionada}</h2>
          <ul>
            {estados.map((estado) => (
              <li key={estado.id}>
                {estado.nome} ({estado.sigla})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
