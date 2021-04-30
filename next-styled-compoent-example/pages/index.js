import styled from "styled-components";
import Wrapper from "../components/Wrapper";

const Container = styled.div `
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`

const Button = styled.button `
  width: 100px;
  height: 100px;
`;

export default function Home() {
  return (
    <Container>
      <Wrapper />
    </Container>
  )
}
