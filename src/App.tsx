import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "pages/Dashboard";
import Router from "routers/routes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
