import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './CommentsPanel.css';
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";
import ReplyForm from '../ReplyForm/ReplyForm';

function CommentsPanel(props) {
   const[commentary, setComment] = useState([]);
   useEffect (() => {
     axios.get(`http://localhost:5000/api/comments/${videoId}`)
        .then ((response) => {
            setComment (response.data);  
            console.log(response.data);
        })
    }, []); 
           
     return (
        <div id="words">            
            <div display="table">
                <div className="col">
                    {commentary.map((comment)=>{
                        return(
                            <div>
                                <tr key={comment._id}> 
                                    <td id="comment_div">{comment.text}</td> 
                                    <td> <button onClick={() => axios.put(`http://localhost:5000/api/comments/likes/${comment._id}`, {})} className="thumb"><FaThumbsUp /></button></td>
                                    <td>{comment.likes}</td>
                                    <td><button onClick = {() => axios.put(`http://localhost:5000/api/comments/dislikes/${comment._id}`,{})} className="thumb"><FaThumbsDown /></button></td>
                                    <td>{comment.dislikes}</td>
                                    <td><ReplyForm  commentId = {comment.id}/></td>
                                </tr>
                                <tr>
                                    <td>{comment.replies.map((reply)=>{
                                        return(<tr id="reply_text">{reply.text}</tr>)
                                        })}
                                    </td>
                                </tr>
                            </div>
                           
                        )
                    })}                                                                                                                         
                </div>
            </div> 
<<<<<<< HEAD
               {/* { /*<form className="form-inline" action="http://localhost:5000/api/comments/" method="post">
                        <div className= " form-group">
                            <input type="text" className="form-control" name ="text" placeholder="Post Comment..." rows="1"/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" className="form-control" name ="videoId" value={`${commentary.videoId}`} /> 
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                            <div>
                                
                        
                        </div>
                </form>    */ } 
=======
>>>>>>> refs/remotes/origin/main
        </div>
    )
}

export default CommentsPanel;