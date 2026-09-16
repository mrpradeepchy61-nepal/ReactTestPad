import { useEffect } from "react";
import { useState } from "react";


function AutoCounter(){

  const [count, setCount] = useState(0);
  const [running, setRunning] =  useState(true);

  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
      setCount(pre=>pre+1);
    },1000)

    return ()=> clearInterval(interval)
    }

  },[running])
  
  function stop(){
    setRunning(false)
  }

  return(<>
    <h1>{count}</h1>

    <button onClick={stop}>Stop</button>
  </>)

}
export default AutoCounter;