import React, { useState } from 'react';

function UseState() {
   const[counter,setCounter] = useState(0)
   const onClick = ()=>{
    setCounter(counter+1)
   }
    return (
        <div>
            <h1>useState example
            </h1>
            <button onClick={onClick}>Click</button>
        <h1>{counter}</h1> 
        </div>
    )
}

export default UseState
