import { useState } from "react";

function App(){

  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value);
  }

  return(<>
  <h1>Live Input Preview</h1>
    <form action="">
      <input type="text"  value={text} onChange={handleChange}/>
    </form>
    <p>You Typed: {text}</p>
  </>)
}
export default App;