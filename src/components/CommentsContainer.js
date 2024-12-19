import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
    {
        name:"Gill",
        text: "Hello I'm in the comment box",
        replies:[
            {
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                ]
            },{
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                ]
            },{
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                    {
                        name:"Gill",
                        text: "Hello I'm in the comment box",
                        replies:[
                            {
                                name:"Gill",
                                text: "Hello I'm in the comment box",
                                replies:[
                                ]
                            }
                        ]
                    },
                    {
                        name:"Gill",
                        text: "Hello I'm in the comment box",
                        replies:[
                            {
                                name:"Gill",
                                text: "Hello I'm in the comment box",
                                replies:[
                                ]
                            },
                            {
                                name:"Gill",
                                text: "Hello I'm in the comment box",
                                replies:[
                                    {
                                        name:"Gill",
                                        text: "Hello I'm in the comment box",
                                        replies:[
                                            {
                                                name:"Gill",
                                                text: "Hello I'm in the comment box",
                                                replies:[
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Gill",
        text: "Hello I'm in the comment box",
        replies:[
        ]
    },
    {
        name:"Gill",
        text: "Hello I'm in the comment box",
        replies:[
            {
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                ]
            },{
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                ]
            },{
                name:"Gill",
                text: "Hello I'm in the comment box",
                replies:[
                    {
                        name:"Gill",
                        text: "Hello I'm in the comment box",
                        replies:[
                        ]
                    },
                    {
                        name:"Gill",
                        text: "Hello I'm in the comment box",
                        replies:[
                            {
                                name:"Gill",
                                text: "Hello I'm in the comment box",
                                replies:[
                                ]
                            },
                            {
                                name:"Gill",
                                text: "Hello I'm in the comment box",
                                replies:[
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Gill",
        text: "Hello I'm in the comment box",
        replies:[
        ]
    },
    {
        name:"Gill",
        text: "Hello I'm in the comment box",
        replies:[
        ]
    }
    
];


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-3xl font-bold">Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;