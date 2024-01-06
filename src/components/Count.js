import React ,{useState} from 'react'
import '../components/style.css';

export default function Count() {
  const[text , setText] = useState(0);
  const addOne = () => {
    let newtext = text + 1;
    setText(newtext);
  }
  const subOne = () => {
    let newtext = text - 1;
    setText(newtext);
  }
  const reset =()=>{
    setText(0);
  }


  
  return (
    <>
    <div className='container'>
      <h1>{text}</h1>
      <div className='row'> 
          <button className='b1' onClick={addOne}>+1</button>
          <button className='b1' onClick={subOne}>-1</button>
        
      </div>
      <button className='b2' onClick={reset}>Reset</button>
      
      </div>
    </>
    
  )

  }