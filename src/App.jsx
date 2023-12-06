import { useEffect } from "react";
import { Provider } from 'react-redux';
import store from './services/reducers/index';

import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";

import globalReactJQueryInitializer from "./utils/react-jquery-theme";

import Router from "./routes/index";

import { currentTheme } from "./services/actions/themeSlice";
import { lightTheme, darkTheme } from "./utils/theme";

const App = () => {
  const theme = useSelector(currentTheme);
  const language = useSelector((state) => state.languageSlice.currentLang);

  useEffect(() => {
    globalReactJQueryInitializer();
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.style.backgroundColor =
      theme === "light"
        ? lightTheme.palette.background.default
        : darkTheme.palette.background.default;
  }, [theme, language]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
