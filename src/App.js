import React, { useState, useEffect } from "react";
import "bootstrap";

import "./scss/Index.scss";
import axios from "axios";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";
import { LangProvider } from "./context/LangContext";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const [DescriptionApi, setDescriptionApi] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const descriptionFunc = async () => {
    try {
      const data = await axios
        .get("https://distribuidores2021.herokuapp.com")
        .then((res) => {
          console.log(res);
          console.log(res.data.description);
          setDescriptionApi();
        });
      console.log(data);
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    descriptionFunc();
  }, []);

  return (
    <div className="App">
      <LangProvider>
        <Routes />
        <Footer />
      </LangProvider>
      {isLoading ? (
        DescriptionApi
      ) : (
        <div className="contenedor-loader">
          <ReactBootStrap.Spinner animation="border" className="loader" />
        </div>
      )}
    </div>
  );
};

export default App;
