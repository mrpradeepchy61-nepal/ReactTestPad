import CommentItem from "./CommentItem";

function PostCard({post}){
    return(<>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <p style={{color: post.likes > 50 ? "red" : "black" , fontWeight: post.likes>50 ? "bold":"normal"}}>
            Likes: {post.likes}
        </p>
        <h4>Comments</h4>
        <ul>
            {post.comments.map((comment, index)=>(
                <CommentItem key={index} text={comment}/>
            ))}
        </ul>
    </>)
}
export default PostCard