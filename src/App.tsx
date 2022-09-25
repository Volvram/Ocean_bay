import React from "react";

import Main from "@pages/Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/yacht">
          <Route path=":id" />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
