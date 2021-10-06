import React, { useState } from 'react';

function UseState2() {
   const[inputValue,setInputValue] = useState("marko")
    
    const onChange=(e)=>{
        setInputValue(e.target.value)
    }
    
    return (
        <div>
            <h1>example 2</h1>
            <input onChange={onChange}  placeholder="enter Something" type="text" />
            {inputValue}
        </div>
    )
}

export default UseState2
