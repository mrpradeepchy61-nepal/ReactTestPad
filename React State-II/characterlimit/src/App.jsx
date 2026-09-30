import { useState } from "react";


function App(){
  const [text, setText] = useState("");

  function handleChange(e){
    const val = e.target.value;
    if(val.length <= 20){
      setText(val);
    }
  }

  let warning = "";
  if(text.length === 20){
    warning = <p style={{color: "red"}}>Limit reached!</p>
  }

  return(<>
    <h1>Character Limit Input</h1>
    
    <input type="text"  value={text} onChange={handleChange}  placeholder="Enter text"/>

    <h3>Remaining: {20 - text.length}</h3>

    {warning}

  </>)

  
}
export default App;