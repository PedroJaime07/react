import styled from "styled-components";
import { cores, tamanhos } from "../../utils/theme";

export const CardStyled = styled.div`
    background-color: ${cores.background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${tamanhos.espacos.normal};
    padding: ${tamanhos.espacos.normal};
    border-radius: ${tamanhos.arredondamento.medio};
    border: 1px solid ${cores.texto};
    color: ${cores.texto};
    position: relative;

    h2 {
        font-size: ${tamanhos.fonte.grande};
        color: #b5be07
    }

    img {
        height: 500px;
        max-width: 350px;
        border-radius: ${tamanhos.arredondamento.medio};
    }

    span{
        position: absolute;
        top: 3px;
        left: 3px;
        font-size: ${tamanhos.fonte.medio};
        color: ${cores.primaria};
    }
`

export const CardGenero = styled.p`
    font-size: ${tamanhos.fonte.normal};
    font-weight: 500;
    font-style: italic;

`

export const CardTemporadas = styled.p`
    font-size: ${tamanhos.fonte.pequeno};
    font-weight: 400;
    color: ${cores.primaria};
    align-self: flex-end;
`