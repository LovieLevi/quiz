import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Atoms from "src/atoms";
import * as Pages from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Atoms.Nav />}>
          <Route index element={<Pages.Main />} />
          <Route path="quiz" element={<Pages.Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
