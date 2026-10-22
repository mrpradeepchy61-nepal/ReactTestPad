import { useNavigate, useParams } from "react-router-dom";


function UserDetails(){

    const users = [
        {
            id: 101,
            name: "Rahul",
            email: "rahul@gmail.com",
            posts: [
            "Learning React Router",
            "My first React project",
            "Understanding useParams",
            ],
        },
        {
            id: 102,
            name: "Priya",
            email: "priya@gmail.com",
            posts: [
            "React is interesting",
            "Learning JavaScript",
            "My frontend journey",
            ],
        },
        {
            id: 103,
            name: "Amit",
            email: "amit@gmail.com",
            posts: [
            "Learning Java",
            "Exploring Spring Boot",
            "Building web applications",
            ],
        },
    ];

    const {id} = useParams();

    const user = users.filter((val)=>val.id == Number(id));

    const navigate = useNavigate();
    
    function openUsersList(){
        navigate("/");
    }

    return(<>
        <h2>User Details</h2>
        <h3>Name: {user[0].name}</h3>
        <h3>Email: {user[0].email}</h3>
        <div>
            <h3>Posts:</h3>
            {user[0].posts.map((post, index)=>(
                <p key={index}>{post}</p>
            ))}
        </div>

        <button onClick={openUsersList}>Back to Users</button>
    
    </>)
}
export default UserDetails;