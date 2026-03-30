import {
  CardGenero,
  CardStyled,
  CardTemporadas,
  CotainerBotoes,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useAnimes } from "../../hooks/useAnimes";

export const Card = ({ anime }: any) => {
  const { id, nome, url_image, genero, quantidade_de_temporadas } = anime;
  const { deletarAnime } = useAnimes();
  const navigate = useNavigate();

  return (
    <CardStyled>
      <span>{id}</span>
      <h2>{nome}</h2>
      <img src={url_image} alt={`Poster do Anime ${nome}`} />
      <CardGenero>Genero: {genero}</CardGenero>
      <CardTemporadas>Temporadas: {quantidade_de_temporadas}</CardTemporadas>
      <CotainerBotoes>
        <button onClick={() => navigate(`/editar/${id}`)}>Editar</button>
        <button onClick={() => deletarAnime(id)}>Excluir</button>
      </CotainerBotoes>
    </CardStyled>
  );
};
