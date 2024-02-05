import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import router from "./Utils/router.js";
import { Header } from "./components/Header/Header.js";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {router.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
