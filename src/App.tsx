import SnackbarProvider from "components/snackbar";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "routers/routes";
import ThemeProvider from "theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <SnackbarProvider>
            <Router />
          </SnackbarProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
