import { useEffect, useState } from "react";
import type { AnimeProps } from "../../types/anime.type";
import axios from "axios";
import { GlobalStyle, Title } from "../../utils/globalStyle";
import { Container } from "./style";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export const Inicio = () => {
  const [animes, setAnimes] = useState<AnimeProps[]>();

  const buscarAnimes = async () => {
    try {
      const { data } = await axios.get(
        "https://abel-animes.onrender.com/animes",
      );
      setAnimes(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    buscarAnimes();
  }, []);

  return (
    <>
      <Title>Lista de Animes</Title>
      
      <Container>
        {animes &&
          animes.map((element) => <Card key={element.id} anime={element} />)}
      </Container>
    </>
  );
};
