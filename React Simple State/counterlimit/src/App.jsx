import { useState } from "react";


function App(){
  const [count, setCount] = useState(0);
  
  function Increase(){
    if(count < 10){
      setCount(pre=>pre+1);
    }
    
  }
  function Decrease(){
    if(count > 0){
      setCount(pre=>pre-1);
    }
  }

  return(<>
    <h1>{count}</h1>
    <button onClick={Increase}>+</button>
    <button onClick={Decrease}>-</button>
  </>)
}
export default App;