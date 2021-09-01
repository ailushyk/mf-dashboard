import React from 'react';
import { Button, Space } from 'ui/elements';
import { Header } from 'ui/components';
import { Page } from 'ui/pages';

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
    <Space className="App">
      <Page
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <Header
        onLogin={onLogin}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <header className="App-header">
        <h1>Module federation</h1>
        <Button onClick={() => alert('cool')}>text</Button>
        <Button>test in dashoboard</Button>
      </header>
    </Space>
  );
}

export default App;
