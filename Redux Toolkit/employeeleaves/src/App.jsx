import { useDispatch, useSelector } from "react-redux"
import { applyLeave, cancelLeave } from "./features/ReduxSlice";

function App(){

  const employeeLeave = useSelector((rem)=>rem.employee.remainingLeaves);
  const dispatch = useDispatch();

  return (<>
    <div>
      <h1>Employee Leave Management</h1>

      <h2>Remaining Leaves: {employeeLeave}</h2>

      <button onClick={()=>dispatch(applyLeave())}>Apply Leave</button> {   }
      <button onClick={()=>dispatch(cancelLeave())}>Cancel Leave</button>
    </div>
  
  </>)
}
export default App