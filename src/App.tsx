import React from 'react';
import { Space } from 'ui/elements';
import { Page } from 'ui/pages';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const onLogin = () => {
    console.log('onLogin');
  };
  const onLogout = () => {
    console.log('onLogout');
  };
  const onCreateAccount = () => {
    console.log('onCreateAccount');
  };
  return (
    <ChakraProvider>
      <Space className="App">
        <Page
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={onCreateAccount}
        />
      </Space>
    </ChakraProvider>
  );
}

export default App;
