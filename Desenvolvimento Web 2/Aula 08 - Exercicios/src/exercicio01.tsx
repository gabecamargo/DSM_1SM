// Exercício 1
import styled from "styled-components";

export default function App() {
  return <Menu />;
}

function Menu() {
  return (
    <MenuSld>
      <Item rotulo="Home" />
      <Item rotulo="Cadastro" />
      <Item rotulo="Contato" />
    </MenuSld>
  );
}

interface ItemProps {
  rotulo: string;
}

function Item({ rotulo }: ItemProps) {
  return <ItemSld>{rotulo}</ItemSld>;
}

const MenuSld = styled.div`
  display: flex;
  font-family: tahoma;
  padding: 5px;
  background-color: #444;
  margin-bottom: 5px;
`;

const ItemSld = styled.div`
  padding: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`;