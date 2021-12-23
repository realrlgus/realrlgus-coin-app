import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
