import React from 'react'


const commentData = [
    {
        name:"Monty",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
            {
                name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {    
                        name:"Monty",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies: [
                            {    
                                 
                        }
                    ]
                }
            ]
        }
    ]
    },
    {
        name:"Monty",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
            {
                name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {     
                        name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {     
                        name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {     
                        name:"Monty",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies: [
                            {    
                                 
                        }
                    ]
                }]
                }]
                }
            ]
        }
    ]
    },
    {
        name:"Monty",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
            {
                name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    
                    {    
                        name:"Monty",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies: [
                            {    
                                name:"Monty",
                                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                                replies: [
                                    {    
                                         
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
        name:"Monty",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies: [
            {
                name:"Monty",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies: [
                    {     
                }
            ]
        }
    ]
    },

]

const Comment = ({comment})=>{
    console.log(comment);
    return(
        <div>
      
        <div className='flex items-center bg-gray-100 p-2 rounded-lg shadow-lg m-2'>
            
             <img
          alt="user"
          className="h-6 mr-6"
          src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
        />
        <div className='flex flex-col'>
        <p>{comment.name}</p>
        <p>{comment.comment}</p>
        </div>
        </div>
        </div>
    )
}

const CommentList = ({comment})=>{
    return(
        <div>
              <h1 className='p-2 font-bold '>Comments</h1>
       
            {
                comment.map((c)=>{
                    return(
                        <div>
                     <Comment comment={c}/> 
                    
                     <div className='pl-5 ml-5 border border-l-black'>
                     <Comment comment={c}/> 
                        </div>       
                     </div>
                    )
                })
            }
        </div>
    )
}

const CommentContainer = () => {
  return (
    <div>
       <CommentList comment={commentData}/>
    </div>
  )
}

export default CommentContainer