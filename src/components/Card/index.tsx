import type { AnimeProps } from "../../types/anime.type";

import { CardGenero, CardStyled, CardTemporadas } from "./style";

export const Card = ({ anime }: any) => {
  const {id, nome, url_image, genero, quantidade_de_temporadas} = anime
  return (
    <CardStyled>
      <span>{id}</span>
      <h2>{nome}</h2>
      <img src={url_image} alt={`Poster do Anime ${nome}`} />
      <CardGenero>Genero: {genero}</CardGenero>
      <CardTemporadas>Temporadas: {quantidade_de_temporadas}</CardTemporadas>
    </CardStyled>
  );
};
