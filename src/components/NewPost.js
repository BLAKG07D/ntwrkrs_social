
import React, { useState } from "react";
import {Button,Form} from 'react-bootstrap'
import "../styles/newPost.css";
import axios from "axios"
import Post from "../components/Post";
function NewPost(props) {
    const [newPost, setNewPost] = useState("");
    const [postImage, setPostImage] = useState("");
    const [finalPost, setFinalPost] = useState("");
    const [likes, setLikes] = useState("0");
    const [postedAt, setPostedAt] = useState("");
    const [commentCount, setCommentCount] = useState("0");
    const [ repost, setRepostCount] = useState("0");
    const [ quotePost, setQuotePostCount] = useState("0");
        let post = {
        postAuthor:props.user.name,
        postContent:finalPost,
        postDate:postedAt,
        postLikes:likes,
        postCommentCount:commentCount,
        repostCount:repost,
        quotePostCount:quotePost,    
    }
    
    const handleSend=()=>{
        const url = "http://localhost:3001/new/post";
        let data = post;
        
        axios.post(url, data,async(res)=>{
            await res.data;
        })
    }
    const sendPost = (e) => {
       e.preventDefault();
        setNewPost(e.target.value);
        setFinalPost(newPost)
        setNewPost("");
        setPostImage("");
        setLikes(0);
        setPostedAt(e.data.postedAt);
        setCommentCount(0)
        setRepostCount(0);
        setQuotePostCount(0);
      handleSend()
    }
    
    return (
        <div className="postBox">
            <Form>
                <div className="postBox__input">

                    <input
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        placeholder="What's Going On?"
                        type="text"
                    />
                </div>
                <input
                    value={postImage}
                    onChange={(e) => setPostImage(e.target.value)}
                    type="file"
                    className="postBox__imageInput"
                />
                <Button onClick={sendPost} type="submit" className="postBox__button">
                    Post!
                </Button>
            </Form>
           {finalPost.length===0 ? "": <Post postContent={finalPost} />}
        </div>
    );
}

export default NewPost;