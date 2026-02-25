import type { PersonagensProps } from "../../types/personagens.type";
import { CardStyled } from "./style";

export const Card = ({ nome, poder, status }: PersonagensProps) => {
  return (
    <CardStyled>
      <h2>Nome: {nome}</h2>
      <p>Poder: {poder}</p>
      <p>Status: {status ? status : "Desconhecido"}</p>
    </CardStyled>
  );
};
