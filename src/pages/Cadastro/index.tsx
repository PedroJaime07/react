import { useState } from "react";
import { Title } from "../../utils/globalStyle";
import { FormStyled } from "./style";
import { useAnimes } from "../../hooks/useAnimes";

export const Cadastro = () => {
  const { criarAnimes } = useAnimes();
  const [nome, setNome] = useState<string>("");
  const [url_image, setUrlImg] = useState<string>("");
  const [genero, setGenero] = useState<string>("");
  const [quantidade_de_temporadas, setQuantidade_de_temporadas] =
    useState<string>("");

  const enviarDados = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const novo_anime = {
      nome,
      url_image,
      genero,
      quantidade_de_temporadas,
    };

    criarAnimes(novo_anime);
  };

  return (
    <>
      <Title>Cadastro de Animes</Title>
      <FormStyled onSubmit={enviarDados}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Título do Anime"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="url"
          id="url_img"
          name="url_img"
          placeholder="URL da Imagem"
          required
          onChange={(e) => setUrlImg(e.target.value)}
        />
        <input
          type="text"
          id="genero"
          name="genero"
          placeholder="Gênero do Anime"
          required
          onChange={(e) => setGenero(e.target.value)}
        />
        <input
          type="number"
          id="temporadas"
          name="temporadas"
          placeholder="N° de Temporadas"
          required
          onChange={(e) => setQuantidade_de_temporadas(e.target.value)}
        />
        <button>Cadastrar</button>
      </FormStyled>
    </>
  );
};
