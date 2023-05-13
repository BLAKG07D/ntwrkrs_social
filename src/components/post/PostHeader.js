import {React} from 'react'
import PostImage from './PostImage'
// import '../../styles/post/header'
const PostHeader = props => { 

  return (
    <div>
     <PostImage/>
     <h4 className='user-displayName'>
        {props.displayName}
     </h4>
     <span className='userName'>
        @{props.username}
     </span>
    </div>
  )
}



export default PostHeader
