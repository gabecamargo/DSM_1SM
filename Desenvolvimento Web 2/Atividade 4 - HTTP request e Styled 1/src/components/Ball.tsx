import styled from "styled-components";

const BallWrapper = styled.div`
  background-color: #209869;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Ball = ({ number }: { number: string }) => (
  <BallWrapper>{number}</BallWrapper>
);
