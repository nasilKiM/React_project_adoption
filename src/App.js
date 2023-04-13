import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import { theme } from "./Styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
