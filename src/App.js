import React, { useEffect, useState } from 'react';
import {useForm}  from './useForm';
import { UseFetch } from './UseFetch';
import './App.css';

function App() {
  const [values, handleChange] = useForm({email:'', password: ''})

  const [count, setCount] = useState(()=> 
  JSON.parse(localStorage.getItem('count'))
  );
  const {data, loading} = UseFetch(`http://numbersapi.com/42`);

  useEffect(()=> localStorage.setItem('count', JSON.stringify(count)), [count]);
  
  return (
    <div className="App">
      <div></div>
      <div>count: {count}</div>
      <button onClick={()=> setCount(c=> c+1)}>Increment count</button>
      <input name="email" value={values.email} onChange={handleChange}/>
      <input type="password" name="password" value={values.password} onChange={handleChange}/>
    </div>
  );
}

export default App;
