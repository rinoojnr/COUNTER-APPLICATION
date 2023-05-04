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
          <h2 className='sub' >Counter:{state}</h2>
          <div className='button-container'>
            <button className='plus-button' onClick={increase}>+</button>
            <button className='minus-button' onClick={decrease} >-</button>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
