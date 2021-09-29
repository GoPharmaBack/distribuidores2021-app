import React from "react";
import "./scss/Index.scss";

import Routes from "./routes/Routes";

import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <Routes />
      </LangProvider>
    </div>
  );
}

export default App;
