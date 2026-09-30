import { useEffect, useState } from "react";


function App(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Count: ${count}`
  },[])

  return(<>
    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
  </>)
}
export default App