import React, { Suspense } from 'react';
import { Button, Header } from 'app2/components';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Module federation</h1>

        <Suspense fallback={null}>
          <Button onClick={() => alert('cool')}>text</Button>
          <Button>test in dashoboard</Button>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
