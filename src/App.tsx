import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { useState } from "react";
import { Header } from "./components/header";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={lightTheme}>
      <Header toggleTheme={toggleTheme} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
