import { Link, Outlet } from "react-router-dom";
import { FooterStyled, HeaderStyled, MainStyled } from "./style";

export const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <h1>Animes</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/cadastro"}>Cadastrar</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyled>

      <MainStyled>
        <Outlet />
      </MainStyled>

      <FooterStyled>
        <p>Animes Legal - Todos os direitos reservados</p>
      </FooterStyled>
    </>
  );
};
