import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Router
import { router } from '@/routers';

// Theme
import theme from '@/themes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
