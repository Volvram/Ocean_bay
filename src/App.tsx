import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="yacht">
          <Route path=":id" />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
