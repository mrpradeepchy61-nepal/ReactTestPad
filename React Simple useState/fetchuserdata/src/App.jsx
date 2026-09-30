import { useEffect } from "react";
import { useState } from "react";


function UserList(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=>{
      setUsers(data)
    })
  },[]);

  return(<>
    <h2>Users</h2>
    {users.map((user)=>(
      <div>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <hr />
      </div>
    ))}
  
  </>)
}
export default UserList;