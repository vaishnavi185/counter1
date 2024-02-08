import React ,{useState} from 'react'
import '../components/style.css';
import UseCount from "./UseCount";

export default function Count() {
 const {count, Resets, addOne,subOne}= UseCount();
 


  
  return (
    <>
    <div className='container'>
      <h1>{count}</h1>
      <div className='row'> 
          <button className='b1' onClick={addOne}>+1</button>
          <button className='b1' onClick={subOne}>-1</button>
        
      </div>
      <button className='b2' onClick={Resets}>Reset</button>
      
      </div>
    </>
    
  )

  }

