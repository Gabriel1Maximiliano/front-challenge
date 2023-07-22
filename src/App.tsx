import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "./metrics/themes";

import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
