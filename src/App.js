import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import { theme } from "./Styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
