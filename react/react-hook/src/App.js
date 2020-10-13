import React, { useState, useEffect } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  });

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me again
      </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Count />
      <Example />
    </div>
    
  )
}

export default App;
