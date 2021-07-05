import React, { useEffect, useState, useRef } from 'react';
import {useForm}  from './useForm';
import { useFetch } from './UseFetch';
import './App.css';

function App() {
  const [values, handleChange] = useForm({email:'', password: ''})

  const [count, setCount] = useState(()=> 
  JSON.parse(localStorage.getItem('count'))
  );
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef();
  useEffect(()=> localStorage.setItem('count', JSON.stringify(count)), [count]);
  
  return (
    <div className="App">
      <div>{!data ? "loading.." : data}</div>
      <div>count: {count}</div>
      <button onClick={()=> setCount(c=> c+1)}>Increment count</button>
      <input ref={inputRef} name="email" value={values.email} onChange={handleChange}/>
      
      <input type="password" name="password" value={values.password} onChange={handleChange}/>
      <button onClick={()=>{
        console.log(inputRef.current.focus())
      }}>Focus</button>
    </div>
  );
}

export default App;
