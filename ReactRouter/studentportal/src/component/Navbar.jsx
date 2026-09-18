import {Link} from "react-router-dom"

function Navbar(){
    return(<>
        <nav className="navbar">
            <h1>Student Portal</h1>
            <div className="nav-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/student" className="link">Student</Link>  
                <Link to="/login" className="link">Login</Link>
            </div>
        </nav>
    </>)
}
export default Navbar