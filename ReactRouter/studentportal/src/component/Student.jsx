
import { Link, Outlet } from "react-router-dom"

function Student(){
    return(<>
    <div className="container">
        <h1>Student Portal</h1>
        <div className="student-button">
            <Link to="/student/profile"className="std-button" >Profile</Link> 
            <Link to="/student/courses" className="std-button">Courses</Link> 
        </div>
        <Outlet/>
    </div>
    </>)
}
export default Student