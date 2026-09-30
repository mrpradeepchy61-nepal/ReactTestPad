import { useState } from "react";


function App(){

  const [options] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [selected, setSelected] = useState("");

  function handleChange(event){
    setSelected(event.target.value)
  }

  return(<>
    <select value={selected} onChange={handleChange}>
      <option value="">Select a Language</option>

      {options.map((option, index)=>(
        <option key={index} value={option}>
          {option}
        </option>
      ))}

    </select>

    <h3>You selected: {selected}</h3>
  </>)
}
export default App;