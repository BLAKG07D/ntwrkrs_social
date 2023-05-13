
import React, { useState } from "react";
import {Button,Form} from 'react-bootstrap'
import "../styles/newPost.css";

import Post from "../components/Post";
function NewPost() {
    const [newPost, setNewPost] = useState("");
    const [postImage, setPostImage] = useState("");
    const [finalPost, setFinalPost] = useState("");
    const sendPost = (e) => {
        e.preventDefault();

      
        setNewPost(e.target.value);
        setFinalPost(newPost)
        setNewPost("");
        setPostImage("");
    };

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