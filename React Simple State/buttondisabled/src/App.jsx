import { useState } from "react";

function App(){
  const [ isDisabled, setIsDisabled] = useState(false);

  function handleClick(){
    setIsDisabled(true);
  }

  return(<>
    <button onClick={handleClick} disabled={isDisabled}>
      {isDisabled ? "Button Disabled" : "Click Me!"}
    </button>
  </>)
}
export default App;