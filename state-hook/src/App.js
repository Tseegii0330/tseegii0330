import React, { useState } from 'react';
import './App.css';

function App() {
  const [ score, setScore ] = useState({});
  const [ message, setMassage ]= useState('Welcome')

  const handleReset = ()=>{
   setScore(prevScore => prevScore =0)
   setMassage('RESETTED' )
 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
        <h2>{ score }</h2>
        <button onClick={()=> setScore(prevScore => prevScore + 1)} >Increase score</button>
        <button onClick={()=> setMassage('HI my name is TSeegii')} >Change message</button>
        <button onClick={()=> setScore(score-1)} >Dicrease score</button>
        <button onClick ={()=>handleReset()}>Reset</button>
     
        
      </header>
    </div>
  );
}

export default App;
