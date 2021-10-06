import React, { useContext } from 'react'
import {AppContext} from './UseContext';
function Login() {
    const {setUsername} = useContext(AppContext);
    return (
        <div>
            <input onChange={(event)=>{
                setUsername(event.target.value)
            }} type="text" name="" id="" />
        </div>
    )
}

export default Login
