import React, { useRef } from 'react'
import Button from './Button'

function  ImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>
            <h1>useImperativeHandle</h1>
            <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default ImperativeHandle