import { useEffect } from "react";
import { Title } from "../../utils/globalStyle";
import { Container } from "./style";
import { Card } from "../../components/Card";
import { useAnimes } from "../../hooks/useAnimes";

export const Inicio = () => {
  const { buscarAnimes, animes, loading } = useAnimes();

  useEffect(() => {
    buscarAnimes();
  }, []);

  return (
    <>
      <Title>Lista de Animes</Title>
      {loading ? (
        <p>Carregando</p>
      ) : (
        <Container>
          {animes &&
            animes.map((element) => <Card key={element.id} anime={element} />)}
        </Container>
      )}
    </>
  );
};
