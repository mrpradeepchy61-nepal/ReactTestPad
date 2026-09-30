
import { useState } from "react";
function App(){
  const [color, setColor] = useState("white");

  function changeColor(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  }

  return(
    <div style={{backgroundColor: color , height: 300}}>
      <h1>Background Color: {color}</h1>
      <button onClick={changeColor}>Change Color</button>


    </div>
  )
}
export default App; 