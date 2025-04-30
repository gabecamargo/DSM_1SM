import styled from "styled-components";
import { Ball } from "../components/Ball";
import { useLottery } from "../hooks/useLottery";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Megasena = () => {
  const { data, loading } = useLottery();

  if (loading) return <Container><p>Carregando...</p></Container>;

  if (!data) return <Container><p>Erro ao carregar os dados.</p></Container>;

  return (
    <Container>
      <Panel>
        {data.dezenas.map((num, i) => (
          <Ball key={i} number={num} />
        ))}
      </Panel>
    </Container>
  );
};
