import React, { Suspense } from 'react';
import { Button } from 'app2/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Module federation</h1>

        <Suspense fallback={null}>
          <Button onClick={() => alert('cool')}>
            text
          </Button>
          <Button>test in dashoboard</Button>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
