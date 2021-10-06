import React, { useEffect } from 'react'

function Child({returnComment}) {
    useEffect(()=>{
        console.log("Function was called");
    },[returnComment])
    return (
        <div>
            {returnComment("Pedro")}
        </div>
    )
}

export default Child
