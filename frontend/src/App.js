import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Routes>
      {/* <HomePage/> */}
    </>
  );
}

export default App;
