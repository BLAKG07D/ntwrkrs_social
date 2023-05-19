import {React, useState} from 'react'
import {Button} from 'react-bootstrap'
export default function PostImpressions() {
    let [likes , updateLikes] = useState(0);
    let [comments, updateComments] = useState(0);
    let [repost, updateRepost] = useState(0);

    const handleLikes =()=>{
        updateLikes(likes = likes+=1)
    }
    const handleComments =()=>{
       updateComments(comments = comments+=1)
    }
    const handleReposts =()=>{
      updateRepost(repost = repost+=1)
    }
  return (
    <div className = "impressions">
      <Button variant="primary" onClick={handleLikes}>{likes} likes</Button>
      <Button variant="secondary" onClick={handleComments}>{comments} comments</Button>
      <Button variant="primary" onClick={handleReposts}>{repost} reposts</Button>
    </div>
  )
}
