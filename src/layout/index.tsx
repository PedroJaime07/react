import { Link, Outlet } from "react-router-dom";
import { HeaderStyled } from "./style";

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

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Animes Legal - Todos os direitos reservados</p>
      </footer>
    </>
  );
};
