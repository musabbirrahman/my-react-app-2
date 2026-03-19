import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function setCounter(){
        let newCount = count + 1;
        setCount(newCount)
    }

    const countStyle = {
        border: '2px solid red'
    }
    return(
       <div style={countStyle}>
         <h2>Hello: {count}</h2>
         <button onClick={setCounter}>Add hello</button>
       </div>
    )
}

