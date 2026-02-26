import styled from "styled-components";
import { cores, tamanhos } from "../utils/theme";

export const HeaderStyled = styled.header`
    background-color: ${cores.primaria};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    color: ${cores.background};

    h1{
        font-size: ${tamanhos.fonte.grande};
        font-weight: 700;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${tamanhos.espacos.muito};
    }

    a{
        color: ${cores.background};
        text-decoration: none;
        font-size: ${tamanhos.fonte.normal};
    }
`

