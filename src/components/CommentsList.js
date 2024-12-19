import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return  comments.map((comment,index) =>  (
    <div  key={index}>
        <Comment data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            {/* Replies are list of commentList itself*/}
            {/* Recursion */}
            <CommentsList comments={comment.replies}/>
        </div>
    </div>
    ));  
};

export default CommentsList