import {React} from 'react'
import PostImage from './PostImage'
import '../../styles/post/header.css'
const PostHeader = props => { 

  return (
    <div className = 'postHeader'>
     <PostImage/>
     <div className='user-displayName'>
     <h4>
        {props.displayName}
     </h4>
     <span className='userName'>
       @{props.userName}
     </span>
     </div>
     
    </div>
  )
}



export default PostHeader
