import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useState(prefersDark);

  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => setTheme(e.matches));
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) => setTheme(e.matches));
  });

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
