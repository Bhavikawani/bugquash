import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "boxicons"
import styled from "styled-components";

const Main = styled.main`
margin: 0;
padding: 0;
`

function App() {
  return (
    <Main>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Routes>
      {/* <HomePage/> */}
    </Main>
  );
}

export default App;
