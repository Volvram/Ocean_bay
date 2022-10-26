import React from "react";

import { smoothAppearance } from "@config/smoothAppearance";
import Main from "@pages/Main/Main";
import Yacht from "@pages/Yacht/Yacht";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.scss";

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    smoothAppearance();
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/yacht">
          <Route path=":id" element={<Yacht />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
