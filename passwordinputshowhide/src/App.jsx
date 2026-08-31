import { useState } from "react";



function App(){

  const [showPassword, setshowPassword] = useState(false)

  return(
    <div>
      <input type={showPassword ? "text" : "password"} placeholder="Enter password" />

      <button onClick={()=> setshowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  )
}
export default App;