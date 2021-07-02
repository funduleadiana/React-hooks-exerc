import React, { useState } from 'react';
import './App.css';

function App() {
  const [count1, setCount] = useState(10)
  const [count2, setCount2] = useState(20)
  return (
    <div className="App">
      <button onClick={()=> {
        setCount(c => c+1);
        setCount2(c=> c+3)
      }
      }
      >+</button>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
    </div>
  );
}

export default App;
