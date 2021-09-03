import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import DashboardPage from './pages/DashboardPage';
import { MemoryRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <MemoryRouter initialEntries={['/']}>
        <DashboardPage />
      </MemoryRouter>
    </ChakraProvider>
  );
}

export default App;
