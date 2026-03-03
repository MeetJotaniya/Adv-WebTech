import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Counter Value: {count}</h1>
            <button onClick={() => {setCount(count+1)}}>Click To Add</button>
        </div>
    )
}

export default Counter;