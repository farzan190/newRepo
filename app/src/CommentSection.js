import { useContext, useState } from "react";
import Cart from "./Context";
import Comment from "./Comment";

const CommentSection=({comments})=>{

    return <div >{comments.map((c)=> 
          <div className="abc">
        <Comment id={c.id} name={c.user.name} userName={c.user.username} content={c.content} replies={c.replies}/>
        </div>
    
    )}
    </div>
}
export default CommentSection;