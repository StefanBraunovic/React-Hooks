import axios from 'axios';
import React, { useLayoutEffect, useState , useMemo} from 'react'


function UseMemo() {
    const [data,setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useLayoutEffect(()=>{
       axios
       .get("https://jsonplaceholder.typicode.com/comments")
       .then((r)=>{
           setData(r.data)
       })     
    },[])
    const findLongestName = (comments) =>{
        if(!comments) return null;
        let longestName = "";
        for(let i =0; i < comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length>longestName.length){
                longestName=currentName;
            }
        }
        console.log("This was computed");
        return longestName;
    }

    const getLongestName = useMemo(()=>findLongestName(data),[data]);

    return (
        <div>
            <div>
                {getLongestName}
            </div>
            <button
            onClick={()=>{
                setToggle(!toggle);
            }}
            >
                {""}
                Toggle
            </button>
            {toggle && <h1>Toggle</h1>}
        </div>
    )
}

export default UseMemo
