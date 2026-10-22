
import {Link} from "react-router-dom";

function UserList(){
    return(<>
    <h1>Users List</h1>
    <nav>
        <Link to="/users/101">Rahul</Link> {"   |   "}
        <Link to="/users/102">Priya</Link> {"   |   "}
        <Link to="/users/103">Amit</Link>
    </nav>

    </>)
}
export default UserList