import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Post from './Post'
export default function PostsSection() {
    let postArray = [
        {
            title:"first post title",
            id:1
        },{
            title:"second post Tiltle",
            id:2
        },
        {
          title:"third post title",
          id:3
        }
    ]
  return (
    /*
     I need to query the database to get all posts
     async function getAllPosts(){
        await axios.get(url,(res)=>{
        postArray.push(res.data))
        }
     }
    
     

     Once I have the posts I can iterate over the array of objects and render each
     post


     */
    <div>
      <ListGroup >
        {postArray.map(post => (
          <ListGroup.Item key={post.id}>
            <Post/>
            </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}


