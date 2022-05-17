import React, { useState } from 'react'

export default function Counter({initialValue}) {
   const [count,setCount] = useState(initialValue);
   
var handleMultiply = ()=>{
   
    setCount(count*2);
    
}


if(count%2==0){
    console.log(count);
    var style1 = {
        color:"green",
        backgrounColor:"black"
    }
   }else{
    var style1 = {  
        color:"red"
    }
   }
  
      
  return (
    <div>
      <h1 style={style1}>Counter App {count} </h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button style={{margin:"12px"}} onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={handleMultiply}>Double</button>
    </div>
  )
}
