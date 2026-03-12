import axios from "axios";

import {
  CardGenero,
  CardStyled,
  CardTemporadas,
  CotainerBotoes,
} from "./style";
import { useNavigate } from "react-router-dom";

export const Card = ({ anime }: any) => {
  const { id, nome, url_image, genero, quantidade_de_temporadas } = anime;
  const navigate = useNavigate()
  
  const excluirAnime = async () => {
    try {
      const { data } = await axios.delete(
        `https://abel-animes.onrender.com/animes/${id}`,
      );
      console.log("Anime excluido com sucesso", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CardStyled>
      <span>{id}</span>
      <h2>{nome}</h2>
      <img src={url_image} alt={`Poster do Anime ${nome}`} />
      <CardGenero>Genero: {genero}</CardGenero>
      <CardTemporadas>Temporadas: {quantidade_de_temporadas}</CardTemporadas>
      <CotainerBotoes>
        <button onClick={() => navigate(`/editar/${id}`)}>Editar</button>
        <button onClick={excluirAnime}>Excluir</button>
      </CotainerBotoes>
    </CardStyled>
  );
};
