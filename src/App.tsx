import { Card } from "./components/Card";
import { personagens } from "./mock/personagens.mock";
import { Container } from "./style";
import { GlobalStyle, Title } from "./utils/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Title>Aula 01 - Revisão</Title>
      <Container>
        {personagens &&
          personagens.map(({ nome, poder, status }) => (
            <Card nome={nome} poder={poder} status={status} />
          ))}
      </Container>
    </>
  );
}

export default App;
