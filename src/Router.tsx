import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Info } from "./routes/Info";
import Main from "./routes/Main";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:coin" element={<Info />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
