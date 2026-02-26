import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Cadastro } from "./pages/Cadastro";
import { Page404 } from "./pages/Page404";
import { GlobalStyle } from "./utils/globalStyle";
import { Layout } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
