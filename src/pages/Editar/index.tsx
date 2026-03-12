import React, { useEffect, useState } from "react";
import { Title } from "../../utils/globalStyle";
import { FormStyled } from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Editar = () => {
  const [nome, setNome] = useState<string>("");
  const [url_image, setUrlImg] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [quantidade_de_temporadas, setQuantidade_de_temporadas] =
    useState<string>("");
  
  const { id } = useParams();

  const buscarAnimes = async () => {
    try {
      const { data } = await axios.get(
        `https://abel-animes.onrender.com/animes/${id}`,
      );
      setNome(data.nome)
      setUrlImg(data.url_image)
      setGenero(data.genero)
      setQuantidade_de_temporadas(data.quantidade_de_temporadas)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    buscarAnimes();
  }, []);

  const editarAnime = async (e: React.SubmitEvent) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(
        `https://abel-animes.onrender.com/animes/${id}`,
        {
          nome,
          url_image,
          genero,
          quantidade_de_temporadas,
        },
      );
      console.log("Anime editado com sucesso", data);
    } catch (err) {
      console.log("Erro ao editar", err);
    }
  };
  

  return (
    <>
      <Title>Editar Anime</Title>
      <FormStyled onSubmit={editarAnime}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Título do Anime"
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <input
          type="url"
          id="url_img"
          name="url_img"
          placeholder="URL da Imagem"
          required
          onChange={(e) => setUrlImg(e.target.value)}
          value={url_image}
        />
        <input
          type="text"
          id="genero"
          name="genero"
          placeholder="Gênero do Anime"
          required
          onChange={(e) => setGenero(e.target.value)}
          value={genero}
        />
        <input
          type="number"
          id="temporadas"
          name="temporadas"
          placeholder="N° de Temporadas"
          required
          onChange={(e) => setQuantidade_de_temporadas(e.target.value)}
          value={quantidade_de_temporadas}
        />
        <button>Salvar</button>
      </FormStyled>
    </>
  );
};
