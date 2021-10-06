import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {
    const divRef = useRef(null)

    useLayoutEffect(()=>{
        console.log(divRef.current.value);
    },[])
    useEffect(()=>{
        divRef.current.value="HEllo";
    },[])
    return (
        <div>
            <h1>UseLayoutEffect</h1>
            <input type="text" ref={divRef} value="Stefna"  />
        </div>
    )
}

export default UseLayoutEffect
