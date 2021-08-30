import React from 'react';
import { Button, Header } from 'app2/components';
import { Space, Page } from 'uivtcd/components';

function App() {
  return (
    <Space className="App">
      <Page />
      <Header />
      <header className="App-header">
        <h1>Module federation</h1>
        <Button onClick={() => alert('cool')}>text</Button>
        <Button>test in dashoboard</Button>
      </header>
    </Space>
  );
}

export default App;
