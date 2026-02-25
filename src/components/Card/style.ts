import styled from "styled-components";
import { cores } from "../../utils/theme";

export const CardStyled = styled.div`
    background-color: ${cores.background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid ${cores.texto};
    color: ${cores.texto};
`