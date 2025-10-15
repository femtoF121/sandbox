import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRoutes from "./router";

const queryClient = new QueryClient();

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Nunito', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
