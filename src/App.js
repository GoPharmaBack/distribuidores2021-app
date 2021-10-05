import React from "react";
import "./scss/Index.scss";

import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <Routes />
        <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
