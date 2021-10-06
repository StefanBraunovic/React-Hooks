import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseEffect() {
    const [data, setData] = useState("");
    const [count,setCount] = useState(0);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((r)=>{
            setData(r.data[0].email)
            console.log("Api was called");
        })
    },[])

    return (
        <div>
            <h1>{count}</h1>
            <h1>Hello World {data}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>HEre</button>
        </div>
    )
}

export default UseEffect
