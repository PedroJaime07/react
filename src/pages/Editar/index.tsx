import React, { useEffect, useState } from "react";
import { Title } from "../../utils/globalStyle";
import { FormStyled } from "./style";
import { useParams } from "react-router-dom";
import { useAnimes } from "../../hooks/useAnimes";

export const Editar = () => {
  const { buscarAnime, atualizarAnime, anime, loading } = useAnimes();
  const [nome, setNome] = useState<string>("");
  const [url_image, setUrlImg] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [quantidade_de_temporadas, setQuantidade_de_temporadas] = useState<
    string | number
  >("");

  const { id } = useParams();

  useEffect(() => {
    buscarAnime(id);
  }, []);

  useEffect(() => {
    if (anime) {
      setNome(anime?.nome);
      setUrlImg(anime?.url_image);
      setGenero(anime?.genero);
      setQuantidade_de_temporadas(anime?.quantidade_de_temporadas);
    }
  }, [anime]);

  const editarAnime = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const info_anime = {
      nome,
      url_image,
      genero,
      quantidade_de_temporadas,
    };

    atualizarAnime(id, info_anime);
  };

  return (
    <>
      <Title>Editar Anime</Title>
      {loading ? (
        "Carregando formulario"
      ) : (
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
      )}
    </>
  );
};
