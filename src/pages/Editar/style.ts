import styled from "styled-components";
import { cores, tamanhos } from "../../utils/theme";

export const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${cores.texto};
    padding: ${tamanhos.espacos.medio};
    border-radius: ${tamanhos.arredondamento.medio};
    max-width: 25vw;
    margin: 0 auto;
    gap: ${tamanhos.espacos.normal};

    input {
        width: 100%;
        padding: 8px;
        background-color: transparent;
        outline: none;
        border: 1px solid ${cores.background};
        border-radius: ${tamanhos.arredondamento.pouco};
    }

    button {
        background-color: ${cores.primaria};
        border-radius: ${tamanhos.arredondamento.pouco};
        color: ${cores.texto};
        outline: none;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        font-size: ${tamanhos.fonte.pequeno};
        align-self: flex-end;
        transition: 0.3s ease-in-out;
        &:hover {
            background-color: ${cores.primaria + 'dd'};
        }
    }
`