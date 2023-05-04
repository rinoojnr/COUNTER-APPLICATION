import { useState } from 'react';
import './App.css';


function App() {
   const [state,setState] = useState(0)
    const increase = () =>{
      setState(state+1)
     }
    const decrease = () =>{
      setState(state-1)
     }
  return (
    <div className="app" >
      <div className='counter-container'>
        <div className='header'>
          <h1 className='head'>Counter App</h1>
          <h2 className='sub' >{state}</h2>
          <div className='plus-button' onClick={increase}>+</div>
          <div className='minus-button' onClick={decrease} >-</div>
          <div className='plus-five-button'>+5</div>
        </div>
      </div>  
    </div>
  );
}

export default App;
